// App State
let allRecipes = recipes;
let filteredRecipes = recipes;
let selectedIngredients = new Set();
let selectedCategory = 'all';
let selectedTimeRange = 'all';
let searchQuery = '';

// DOM Elements
const recipeGrid = document.getElementById('recipeGrid');
const ingredientFilters = document.getElementById('ingredientFilters');
const searchInput = document.getElementById('searchInput');
const categoryButtons = document.querySelectorAll('.category-filters .filter-btn');
const timeButtons = document.querySelectorAll('.time-filters .filter-btn');
const resetButton = document.getElementById('resetFilters');
const recipeCount = document.getElementById('recipeCount');
const modal = document.getElementById('recipeModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

// Initialize App
function init() {
    generateIngredientFilters();
    displayRecipes();
    setupEventListeners();
}

// Generate ingredient filter tags
function generateIngredientFilters() {
    const allIngredients = new Set();

    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            allIngredients.add(ingredient);
        });
    });

    const sortedIngredients = Array.from(allIngredients).sort();

    ingredientFilters.innerHTML = '';
    sortedIngredients.forEach(ingredient => {
        const tag = document.createElement('span');
        tag.className = 'ingredient-tag';
        tag.textContent = ingredient;
        tag.addEventListener('click', () => toggleIngredient(ingredient, tag));
        ingredientFilters.appendChild(tag);
    });
}

// Toggle ingredient selection
function toggleIngredient(ingredient, element) {
    if (selectedIngredients.has(ingredient)) {
        selectedIngredients.delete(ingredient);
        element.classList.remove('selected');
    } else {
        selectedIngredients.add(ingredient);
        element.classList.add('selected');
    }
    filterRecipes();
}

// Setup event listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterRecipes();
    });

    // Category filters
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedCategory = btn.dataset.category;
            filterRecipes();
        });
    });

    // Time filters
    timeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            timeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedTimeRange = btn.dataset.time;
            filterRecipes();
        });
    });

    // Reset filters
    resetButton.addEventListener('click', resetFilters);

    // Modal
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Filter recipes based on all criteria
function filterRecipes() {
    filteredRecipes = allRecipes.filter(recipe => {
        // Search filter
        const matchesSearch = searchQuery === '' ||
            recipe.name.toLowerCase().includes(searchQuery) ||
            recipe.description.toLowerCase().includes(searchQuery) ||
            recipe.ingredients.some(ing => ing.toLowerCase().includes(searchQuery));

        // Category filter
        const matchesCategory = selectedCategory === 'all' ||
            recipe.categories.includes(selectedCategory);

        // Time filter
        let matchesTime = true;
        if (selectedTimeRange !== 'all') {
            const [min, max] = selectedTimeRange.split('-').map(Number);
            matchesTime = recipe.time >= min && recipe.time <= max;
        }

        // Ingredient filter
        const matchesIngredients = selectedIngredients.size === 0 ||
            Array.from(selectedIngredients).every(ing =>
                recipe.ingredients.some(recipeIng =>
                    recipeIng.toLowerCase().includes(ing.toLowerCase())
                )
            );

        return matchesSearch && matchesCategory && matchesTime && matchesIngredients;
    });

    displayRecipes();
}

// Display recipes in grid
function displayRecipes() {
    if (filteredRecipes.length === 0) {
        recipeGrid.innerHTML = `
            <div class="no-results">
                <h3>Keine Rezepte gefunden</h3>
                <p>Versuche andere Filter oder setze die Suche zurück</p>
            </div>
        `;
        recipeCount.textContent = '0 Rezepte gefunden';
        return;
    }

    recipeGrid.innerHTML = '';

    filteredRecipes.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipeGrid.appendChild(card);
    });

    recipeCount.textContent = `${filteredRecipes.length} Rezepte gefunden`;
}

// Create recipe card element
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.addEventListener('click', () => showRecipeDetails(recipe));

    // Generate tags HTML
    const tagsHTML = recipe.categories.map(cat => {
        const tagClass = cat.replace(/[^a-z]/gi, '').toLowerCase();
        return `<span class="tag ${tagClass}">${getCategoryIcon(cat)} ${cat}</span>`;
    }).join('');

    card.innerHTML = `
        <div class="recipe-image">${recipe.emoji}</div>
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.name}</h3>
            <div class="recipe-meta">
                <span class="meta-tag time">⏱️ ${recipe.time} Min</span>
                <span class="meta-tag difficulty">🎯 ${recipe.difficulty}</span>
                <span class="meta-tag price">💰 ${recipe.price.toFixed(2)}€</span>
            </div>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-tags">
                ${tagsHTML}
            </div>
        </div>
    `;

    return card;
}

// Get icon for category
function getCategoryIcon(category) {
    const icons = {
        'vegetarisch': '🥗',
        'vegan': '🌱',
        'schnell': '⚡',
        'günstig': '💰',
        'protein': '💪'
    };
    return icons[category] || '';
}

// Show recipe details in modal
function showRecipeDetails(recipe) {
    const nutritionHTML = recipe.nutrition ? `
        <div class="modal-section">
            <h3>Nährwerte (pro Portion)</h3>
            <div class="nutrition-info">
                <div class="nutrition-item">
                    <strong>${recipe.nutrition.calories}</strong>
                    <span>Kalorien</span>
                </div>
                <div class="nutrition-item">
                    <strong>${recipe.nutrition.protein}g</strong>
                    <span>Protein</span>
                </div>
                <div class="nutrition-item">
                    <strong>${recipe.nutrition.carbs}g</strong>
                    <span>Kohlenhydrate</span>
                </div>
                <div class="nutrition-item">
                    <strong>${recipe.nutrition.fat}g</strong>
                    <span>Fett</span>
                </div>
            </div>
        </div>
    ` : '';

    const ingredientsHTML = recipe.ingredients.map(ing =>
        `<li>${ing}</li>`
    ).join('');

    const instructionsHTML = recipe.instructions.map(instruction =>
        `<li>${instruction}</li>`
    ).join('');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${recipe.emoji} ${recipe.name}</h2>
            <div class="recipe-meta">
                <span class="meta-tag time">⏱️ ${recipe.time} Min</span>
                <span class="meta-tag difficulty">🎯 ${recipe.difficulty}</span>
                <span class="meta-tag price">💰 ${recipe.price.toFixed(2)}€</span>
                <span class="meta-tag">👥 ${recipe.servings} Portionen</span>
            </div>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3>Zutaten</h3>
                <ul class="ingredients-list">
                    ${ingredientsHTML}
                </ul>
            </div>
            <div class="modal-section">
                <h3>Zubereitung</h3>
                <ol class="instructions-list">
                    ${instructionsHTML}
                </ol>
            </div>
            ${nutritionHTML}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Reset all filters
function resetFilters() {
    // Reset search
    searchInput.value = '';
    searchQuery = '';

    // Reset ingredients
    selectedIngredients.clear();
    document.querySelectorAll('.ingredient-tag').forEach(tag => {
        tag.classList.remove('selected');
    });

    // Reset category
    selectedCategory = 'all';
    categoryButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });

    // Reset time
    selectedTimeRange = 'all';
    timeButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.time === 'all') {
            btn.classList.add('active');
        }
    });

    filterRecipes();
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Service Worker Registration (optional, for PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}

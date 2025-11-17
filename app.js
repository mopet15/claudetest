// iOS-Style Recipe App
console.log('App starting...');
console.log('Recipes loaded:', recipes ? recipes.length : 0);

// App State
const state = {
    allRecipes: [],
    filteredRecipes: [],
    selectedIngredients: new Set(),
    selectedCategory: 'all',
    selectedTimeRange: 'all',
    searchQuery: ''
};

// DOM Elements
const dom = {
    recipeGrid: document.getElementById('recipeGrid'),
    searchInput: document.getElementById('searchInput'),
    clearSearch: document.getElementById('clearSearch'),
    recipeCount: document.getElementById('recipeCount'),
    filterPills: document.querySelectorAll('.pill'),
    filterBtn: document.getElementById('filterBtn'),
    recipeModal: document.getElementById('recipeModal'),
    filterModal: document.getElementById('filterModal'),
    modalBody: document.getElementById('modalBody'),
    ingredientFilters: document.getElementById('ingredientFilters'),
    timeButtons: document.querySelectorAll('.filter-option'),
    resetFilters: document.getElementById('resetFilters'),
    applyFilters: document.getElementById('applyFilters'),
    ingredientSearch: document.getElementById('ingredientSearch')
};

// Initialize App
function init() {
    console.log('Initializing app...');

    // Load recipes
    state.allRecipes = recipes || [];
    state.filteredRecipes = [...state.allRecipes];

    console.log('State initialized:', state.allRecipes.length, 'recipes');

    // Setup
    setupEventListeners();
    generateIngredientFilters();
    displayRecipes();

    console.log('App initialized successfully');
}

// Setup Event Listeners
function setupEventListeners() {
    // Search
    dom.searchInput.addEventListener('input', handleSearch);
    dom.clearSearch.addEventListener('click', clearSearch);

    // Category Pills
    dom.filterPills.forEach(pill => {
        pill.addEventListener('click', () => handleCategoryChange(pill));
    });

    // Filter Button
    dom.filterBtn.addEventListener('click', () => openBottomSheet(dom.filterModal));

    // Time Filters
    dom.timeButtons.forEach(btn => {
        btn.addEventListener('click', () => handleTimeChange(btn));
    });

    // Reset Filters
    dom.resetFilters.addEventListener('click', resetFilters);

    // Apply Filters
    dom.applyFilters.addEventListener('click', () => {
        filterRecipes();
        closeBottomSheet(dom.filterModal);
    });

    // Close Modals
    setupModalClose(dom.recipeModal);
    setupModalClose(dom.filterModal);

    // Ingredient Search
    if (dom.ingredientSearch) {
        dom.ingredientSearch.addEventListener('input', filterIngredientTags);
    }
}

// Handle Search
function handleSearch(e) {
    state.searchQuery = e.target.value.toLowerCase().trim();

    // Show/hide clear button
    dom.clearSearch.style.display = state.searchQuery ? 'flex' : 'none';

    filterRecipes();
}

// Clear Search
function clearSearch() {
    dom.searchInput.value = '';
    state.searchQuery = '';
    dom.clearSearch.style.display = 'none';
    filterRecipes();
}

// Handle Category Change
function handleCategoryChange(pill) {
    // Remove active from all pills
    dom.filterPills.forEach(p => p.classList.remove('active'));

    // Add active to clicked pill
    pill.classList.add('active');

    // Update state
    state.selectedCategory = pill.dataset.category;

    // Filter recipes
    filterRecipes();
}

// Handle Time Change
function handleTimeChange(btn) {
    // Remove active from all buttons
    dom.timeButtons.forEach(b => b.classList.remove('active'));

    // Add active to clicked button
    btn.classList.add('active');

    // Update state
    state.selectedTimeRange = btn.dataset.time;
}

// Generate Ingredient Filters
function generateIngredientFilters() {
    const allIngredients = new Set();

    state.allRecipes.forEach(recipe => {
        if (recipe.ingredients && Array.isArray(recipe.ingredients)) {
            recipe.ingredients.forEach(ing => allIngredients.add(ing));
        }
    });

    const sorted = Array.from(allIngredients).sort();

    dom.ingredientFilters.innerHTML = '';

    sorted.forEach(ingredient => {
        const tag = document.createElement('button');
        tag.className = 'ingredient-tag';
        tag.textContent = ingredient;
        tag.dataset.ingredient = ingredient;
        tag.addEventListener('click', () => toggleIngredient(ingredient, tag));
        dom.ingredientFilters.appendChild(tag);
    });
}

// Toggle Ingredient
function toggleIngredient(ingredient, element) {
    if (state.selectedIngredients.has(ingredient)) {
        state.selectedIngredients.delete(ingredient);
        element.classList.remove('selected');
    } else {
        state.selectedIngredients.add(ingredient);
        element.classList.add('selected');
    }
}

// Filter Ingredient Tags (search within ingredients)
function filterIngredientTags(e) {
    const query = e.target.value.toLowerCase();
    const tags = dom.ingredientFilters.querySelectorAll('.ingredient-tag');

    tags.forEach(tag => {
        const ingredient = tag.dataset.ingredient.toLowerCase();
        tag.style.display = ingredient.includes(query) ? 'inline-block' : 'none';
    });
}

// Filter Recipes
function filterRecipes() {
    state.filteredRecipes = state.allRecipes.filter(recipe => {
        // Search filter
        const matchesSearch = !state.searchQuery ||
            recipe.name.toLowerCase().includes(state.searchQuery) ||
            recipe.description.toLowerCase().includes(state.searchQuery) ||
            (recipe.ingredients && recipe.ingredients.some(ing =>
                ing.toLowerCase().includes(state.searchQuery)
            ));

        // Category filter
        const matchesCategory = state.selectedCategory === 'all' ||
            (recipe.categories && recipe.categories.includes(state.selectedCategory));

        // Time filter
        let matchesTime = true;
        if (state.selectedTimeRange !== 'all') {
            const [min, max] = state.selectedTimeRange.split('-').map(Number);
            matchesTime = recipe.time >= min && recipe.time <= max;
        }

        // Ingredient filter
        const matchesIngredients = state.selectedIngredients.size === 0 ||
            Array.from(state.selectedIngredients).every(selectedIng =>
                recipe.ingredients && recipe.ingredients.some(recipeIng =>
                    recipeIng.toLowerCase().includes(selectedIng.toLowerCase())
                )
            );

        return matchesSearch && matchesCategory && matchesTime && matchesIngredients;
    });

    displayRecipes();
}

// Display Recipes
function displayRecipes() {
    console.log('Displaying recipes:', state.filteredRecipes.length);

    // Update count
    dom.recipeCount.textContent = `${state.filteredRecipes.length} Rezepte`;

    // Clear grid
    dom.recipeGrid.innerHTML = '';

    // No results
    if (state.filteredRecipes.length === 0) {
        dom.recipeGrid.innerHTML = `
            <div class="no-results">
                <div class="no-results-emoji">🔍</div>
                <h3>Keine Rezepte gefunden</h3>
                <p>Versuche andere Filter oder setze die Suche zurück</p>
            </div>
        `;
        return;
    }

    // Create cards
    state.filteredRecipes.forEach(recipe => {
        const card = createRecipeCard(recipe);
        dom.recipeGrid.appendChild(card);
    });
}

// Create Recipe Card
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    // Generate tags
    const tags = (recipe.categories || []).map(cat => {
        const className = cat.replace(/[^a-z]/gi, '').toLowerCase();
        return `<span class="tag ${className}">${cat}</span>`;
    }).join('');

    // Gradient colors
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    ];

    const gradient = gradients[recipe.id % gradients.length];

    card.innerHTML = `
        <div class="recipe-image" style="background: ${gradient}">
            ${recipe.emoji || '🍽️'}
        </div>
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.name}</h3>
            <div class="recipe-meta">
                <span class="meta-tag time">⏱️ ${recipe.time} Min</span>
                <span class="meta-tag difficulty">${recipe.difficulty}</span>
                <span class="meta-tag price">€${recipe.price.toFixed(2)}</span>
            </div>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-tags">${tags}</div>
        </div>
    `;

    card.addEventListener('click', () => showRecipeDetails(recipe));

    return card;
}

// Show Recipe Details
function showRecipeDetails(recipe) {
    const ingredientsList = (recipe.ingredients || [])
        .map(ing => `<li>${ing}</li>`)
        .join('');

    const instructionsList = (recipe.instructions || [])
        .map(inst => `<li>${inst}</li>`)
        .join('');

    const nutritionHtml = recipe.nutrition ? `
        <div class="detail-section">
            <h3>Nährwerte pro Portion</h3>
            <div class="nutrition-grid">
                <div class="nutrition-card">
                    <div class="nutrition-value">${recipe.nutrition.calories}</div>
                    <div class="nutrition-label">Kalorien</div>
                </div>
                <div class="nutrition-card">
                    <div class="nutrition-value">${recipe.nutrition.protein}g</div>
                    <div class="nutrition-label">Protein</div>
                </div>
                <div class="nutrition-card">
                    <div class="nutrition-value">${recipe.nutrition.carbs}g</div>
                    <div class="nutrition-label">Kohlenhydrate</div>
                </div>
                <div class="nutrition-card">
                    <div class="nutrition-value">${recipe.nutrition.fat}g</div>
                    <div class="nutrition-label">Fett</div>
                </div>
            </div>
        </div>
    ` : '';

    dom.modalBody.innerHTML = `
        <div class="recipe-detail-header">
            <div class="recipe-detail-emoji">${recipe.emoji || '🍽️'}</div>
            <h2 class="recipe-detail-title">${recipe.name}</h2>
            <div class="recipe-detail-meta">
                <span class="meta-tag time">⏱️ ${recipe.time} Min</span>
                <span class="meta-tag difficulty">${recipe.difficulty}</span>
                <span class="meta-tag price">€${recipe.price.toFixed(2)}</span>
                <span class="meta-tag">👥 ${recipe.servings} Portionen</span>
            </div>
        </div>

        <div class="detail-section">
            <h3>Zutaten</h3>
            <ul class="ingredients-list">${ingredientsList}</ul>
        </div>

        <div class="detail-section">
            <h3>Zubereitung</h3>
            <ol class="instructions-list">${instructionsList}</ol>
        </div>

        ${nutritionHtml}
    `;

    openBottomSheet(dom.recipeModal);
}

// Open Bottom Sheet
function openBottomSheet(sheet) {
    sheet.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Bottom Sheet
function closeBottomSheet(sheet) {
    sheet.classList.remove('active');
    document.body.style.overflow = '';
}

// Setup Modal Close
function setupModalClose(modal) {
    const backdrop = modal.querySelector('.sheet-backdrop');

    backdrop.addEventListener('click', () => closeBottomSheet(modal));

    // Swipe down to close (basic implementation)
    let startY = 0;
    const content = modal.querySelector('.sheet-content');

    content.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    });

    content.addEventListener('touchmove', (e) => {
        const currentY = e.touches[0].clientY;
        const diff = currentY - startY;

        if (diff > 0 && content.scrollTop === 0) {
            e.preventDefault();
            content.style.transform = `translateY(${diff}px)`;
        }
    });

    content.addEventListener('touchend', (e) => {
        const currentY = e.changedTouches[0].clientY;
        const diff = currentY - startY;

        if (diff > 100) {
            closeBottomSheet(modal);
        }

        content.style.transform = '';
    });
}

// Reset Filters
function resetFilters() {
    // Reset search
    dom.searchInput.value = '';
    state.searchQuery = '';
    dom.clearSearch.style.display = 'none';

    // Reset category
    state.selectedCategory = 'all';
    dom.filterPills.forEach(pill => {
        pill.classList.remove('active');
        if (pill.dataset.category === 'all') {
            pill.classList.add('active');
        }
    });

    // Reset time
    state.selectedTimeRange = 'all';
    dom.timeButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.time === 'all') {
            btn.classList.add('active');
        }
    });

    // Reset ingredients
    state.selectedIngredients.clear();
    document.querySelectorAll('.ingredient-tag').forEach(tag => {
        tag.classList.remove('selected');
    });

    // Filter
    filterRecipes();
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Log for debugging
window.appState = state;
console.log('App loaded. Use window.appState to inspect state.');

/* <------------------------------------------------
      THE ULTIMATE MEAL PLANNER
      FILE: app.js
      VERSION: 1.00 Final
      CREDITS: Tre Thacker ~ 2026
      DEDICATION: ~~for my AMAZING wife, April, and my AWESOME mom, Sandii !~~

      JAVASCRIPT CHANGELOG:
      VERSION 1.00 Final - Initial JavaScript foundation created.
   -------------------------------------------------> */

/* <------------------------------------------------
      APP INFORMATION CONSTANTS
   -------------------------------------------------> */

const APP_TITLE = "The Ultimate Meal Planner";
const APP_VERSION = "1.00 Final";
const APP_CREDITS = "Tre Thacker ~ 2026";
const APP_DEDICATION = "~~for my AMAZING wife, April, and my AWESOME mom, Sandii !~~";

/* <------------------------------------------------
      MEAL CATEGORY CONSTANTS
   -------------------------------------------------> */

const MEAL_CATEGORIES = [
  "Breakfast",
  "Lunch",
  "Dinner",
  "Snack/Dessert"
];

const DEFAULT_MONTH_CATEGORIES = [
  "Dinner"
];

/* <------------------------------------------------
      DEFAULT PANTRY STARTER ITEMS
   -------------------------------------------------> */

const DEFAULT_PANTRY_ITEMS = [
  { id: "pantry-salt", name: "Salt", checked: false },
  { id: "pantry-pepper", name: "Pepper", checked: false },
  { id: "pantry-sugar", name: "Sugar", checked: false },
  { id: "pantry-flour", name: "Flour", checked: false },
  { id: "pantry-brown-sugar", name: "Brown Sugar", checked: false },
  { id: "pantry-powdered-sugar", name: "Powdered Sugar", checked: false },
  { id: "pantry-baking-soda", name: "Baking Soda", checked: false },
  { id: "pantry-baking-powder", name: "Baking Powder", checked: false },
  { id: "pantry-vanilla", name: "Vanilla", checked: false },
  { id: "pantry-cinnamon", name: "Cinnamon", checked: false },
  { id: "pantry-paprika", name: "Paprika", checked: false },
  { id: "pantry-garlic-powder", name: "Garlic Powder", checked: false },
  { id: "pantry-onion-powder", name: "Onion Powder", checked: false },
  { id: "pantry-italian-seasoning", name: "Italian Seasoning", checked: false },
  { id: "pantry-olive-oil", name: "Olive Oil", checked: false },
  { id: "pantry-vegetable-oil", name: "Vegetable Oil", checked: false },
  { id: "pantry-butter", name: "Butter", checked: false },
  { id: "pantry-coffee", name: "Coffee", checked: false },
  { id: "pantry-tea", name: "Tea", checked: false },
	{ id: "pantry-milk", name: "Milk", checked: false }
];

/* <------------------------------------------------
      FONT OPTION CONSTANTS
   -------------------------------------------------> */

const FONT_OPTIONS = [
  {
    label: "Arial",
    value: "Arial, Helvetica, sans-serif"
  },
  {
    label: "Georgia",
    value: "Georgia, serif"
  },
  {
    label: "Times New Roman",
    value: "\"Times New Roman\", Times, serif"
  },
  {
    label: "Trebuchet MS",
    value: "\"Trebuchet MS\", Arial, sans-serif"
  },
  {
    label: "Verdana",
    value: "Verdana, Geneva, sans-serif"
  },
  {
    label: "Courier New",
    value: "\"Courier New\", Courier, monospace"
  },
  {
    label: "Comic Sans MS",
    value: "\"Comic Sans MS\", cursive, sans-serif"
  }
];

/* <------------------------------------------------
      THEME PRESET CONSTANTS
   -------------------------------------------------> */

const THEME_PRESETS = {
  "classic-blue": {
    name: "Classic Blue",
		icon: "💎",
		colors: {
			"--theme-primary": "#2f5f9f",
			"--theme-secondary": "#5d87c0",
			"--theme-accent": "#1d3f6a",

			"--theme-panel-tint": "rgba(47,95,159,0.08)",
			"--theme-window-tint": "rgba(47,95,159,0.12)"
		}
  },

  "forest-green": {
    name: "Forest Green",
		icon: "🌳",
    colors: {
      "--theme-primary": "#2f6f4e",
      "--theme-secondary": "#5f9f7a",
      "--theme-accent": "#1f4f35",
			
			"--theme-panel-tint": "rgba(47,111,78,0.08)",
			"--theme-window-tint": "rgba(47,111,78,0.12)"
    }
  },

  "sunset-orange": {
    name: "Sunset Orange",
		icon: "🌄",
    colors: {
      "--theme-primary": "#b85c1e",
      "--theme-secondary": "#e08a45",
      "--theme-accent": "#7a3510",
			
			"--theme-panel-tint": "rgba(184,92,30,0.08)",
			"--theme-window-tint": "rgba(184,92,30,0.12)"
    }
  },

  "berry-purple": {
    name: "Berry Purple",
		icon:"🍇",
    colors: {
      "--theme-primary": "#6b3f91",
      "--theme-secondary": "#9a70c2",
      "--theme-accent": "#43205f",
			
			"--theme-panel-tint": "rgba(107,63,145,0.08)",
			"--theme-window-tint": "rgba(107,63,145,0.12)"
    }
  },

  "cranberry-red": {
    name: "Cranberry Red",
		icon:"🍒",
    colors: {
      "--theme-primary": "#9f2f45",
      "--theme-secondary": "#c85b70",
      "--theme-accent": "#651d2c",
			
			"--theme-panel-tint": "rgba(159,47,69,0.08)",
			"--theme-window-tint": "rgba(159,47,69,0.12)"
    }
  },

	"dandelion-yellow": {
		name: "Dandelion Yellow",
		icon:"🌻",
		colors: {
			"--theme-primary": "#d9a400",
			"--theme-secondary": "#f0c94a",
			"--theme-accent": "#a87700",

			"--theme-panel-tint": "rgba(217,164,0,0.08)",
			"--theme-window-tint": "rgba(217,164,0,0.12)"
		}
	},

	"stormy-grey": {
		name: "Stormy Grey",
		icon:"🌩️",
		colors: {
			"--theme-primary": "#55606d",
			"--theme-secondary": "#7a8796",
			"--theme-accent": "#39414a",

			"--theme-panel-tint": "rgba(85,96,109,0.08)",
			"--theme-window-tint": "rgba(85,96,109,0.12)"
		}
	},

	"tropical-beach": {
		name: "Tropical Beach",
		icon:"🌴",
		colors: {
			"--theme-primary": "#0d8aa8",
			"--theme-secondary": "#46bfd8",
			"--theme-accent": "#0b5d73",

			"--theme-panel-tint": "rgba(13,138,168,0.08)",
			"--theme-window-tint": "rgba(13,138,168,0.12)"
		}
	},
	
	"fireworks": {
    name: "Fireworks",
		icon:"✨",
    colors: {
      "--theme-primary": "#c62828",
      "--theme-secondary": "#356ec7",
      "--theme-accent": "#1f3f88",

      "--theme-panel-tint": "rgba(198,40,40,0.08)",
      "--theme-window-tint": "rgba(53,110,199,0.12)"
    }
  },

  "holiday": {
    name: "Holiday",
		icon:"🎄",
    colors: {
      "--theme-primary": "#1e7d32",
      "--theme-secondary": "#c62828",
      "--theme-accent": "#b88a00",

      "--theme-panel-tint": "rgba(30,125,50,0.08)",
      "--theme-window-tint": "rgba(198,40,40,0.12)"
    }
  },

	"precious-metals": {
		name: "Precious Metals",
		icon:"💰",
		colors: {
			"--theme-primary": "#b28b2c",
			"--theme-secondary": "#b8bcc4",
			"--theme-accent": "#756028",

			"--theme-panel-tint": "rgba(178,139,44,0.08)",
			"--theme-window-tint": "rgba(184,188,196,0.12)"
    }
  },
	
	 "flamingo-pink": {
    name: "Flamingo Pink",
		icon:"🦩",
    colors: {
      "--theme-primary": "#e85b9b",
      "--theme-secondary": "#ff93be",
      "--theme-accent": "#b83d74",

      "--theme-panel-tint": "rgba(232,91,155,0.08)",
      "--theme-window-tint": "rgba(255,147,190,0.12)"
    }
  }

};

/* <------------------------------------------------
      DATABASE CONSTANTS
   -------------------------------------------------> */

const DATABASE_NAME = "UltimateMealPlannerDatabase";
const DATABASE_VERSION = 2;

const DATABASE_STORES = {
  settings: "settings",
  recipes: "recipes",
  calendarMonths: "calendarMonths",
  shoppingLists: "shoppingLists",
	pantryItems: "pantryItems"
};

/* <------------------------------------------------
      DEFAULT SETTINGS FOUNDATION
   -------------------------------------------------> */

const DEFAULT_SETTINGS = {
  calendarName: APP_TITLE,
	activeCategories: [...DEFAULT_MONTH_CATEGORIES],
  themeId: "classic-blue",
  darkMode: false,
  titleFont: "Arial, Helvetica, sans-serif",
  titleBold: true,
  titleItalic: false,
  titleUnderline: false,
  monthFont: "Arial, Helvetica, sans-serif",
  monthBold: true,
  monthItalic: false,
  monthUnderline: false,
  dayNumberFont: "Arial, Helvetica, sans-serif",
  dayNumberBold: true,
  dayNumberItalic: false,
  dayNumberUnderline: false
};

/* <------------------------------------------------
      DOM REFERENCE STORAGE
   -------------------------------------------------> */

const DOM = {};

/* <------------------------------------------------
      TEMPORARY APP STATE
   -------------------------------------------------> */

const appState = {
	db: null,
  settings: { ...DEFAULT_SETTINGS },
  currentDate: new Date(),
  calendar: {
    activeMonthIndex: new Date().getMonth(),
    activeYear: new Date().getFullYear(),
    firstDayIndex: 0,
    daysInMonth: 0,
    totalCalendarCells: 42
  },
	calendarMonthsBySlot: {},
	recipes: [],
	shoppingLists: [],
	pantryItems: [],
	selectedAssignmentDay: null,
	viewedRecipeId: null,
	pendingSlotChoice: null,
	selectedTouchRecipeId: null
};

/* <------------------------------------------------
      APP STARTUP
   -------------------------------------------------> */

document.addEventListener("DOMContentLoaded", initializeApp);

async function initializeApp() {
  collectDomReferences();
  applyAppInformation();

try {
  appState.db = await openAppDatabase();
  console.log("IndexedDB opened successfully.");
  await loadSettingsFromDatabase();
	appState.recipes = await getAllRecipesFromDatabase();
	sortRecipesByTitle();
	console.log(`${appState.recipes.length} recipes loaded.`);

	appState.shoppingLists = await getAllShoppingListsFromDatabase();
	console.log(`${appState.shoppingLists.length} shopping lists loaded.`);

	appState.pantryItems = await getAllPantryItemsFromDatabase();

	if (appState.pantryItems.length === 0) {
		appState.pantryItems = structuredClone(DEFAULT_PANTRY_ITEMS);
		await saveDefaultPantryItemsToDatabase();
	}

	console.log(`${appState.pantryItems.length} pantry items loaded.`);
	} catch (error) {
		console.warn("IndexedDB could not be opened. Temporary session data will still work.", error);
	}

applyInitialDateValues();
	applySettingsToScreen();
	updateDarkModeButtonText();
	await loadCurrentMonthFoundation();
	connectBaseEventListeners();
  registerServiceWorker();
	
	showWelcomeDialogIfNeeded();

  console.log(`${APP_TITLE} Version ${APP_VERSION} loaded successfully.`);
}

/* <------------------------------------------------
      INDEXEDDB DATABASE SETUP
   -------------------------------------------------> */

function openAppDatabase() {
  return new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("IndexedDB is not supported in this browser."));
      return;
    }

    const databaseRequest = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);

    databaseRequest.onerror = () => {
      reject(databaseRequest.error);
    };

    databaseRequest.onsuccess = () => {
      resolve(databaseRequest.result);
    };

    databaseRequest.onupgradeneeded = (event) => {
      const database = event.target.result;

      createObjectStoreIfMissing(database, DATABASE_STORES.settings, {
        keyPath: "id"
      });

      createObjectStoreIfMissing(database, DATABASE_STORES.recipes, {
        keyPath: "id"
      });

      createObjectStoreIfMissing(database, DATABASE_STORES.calendarMonths, {
        keyPath: "slotKey"
      });

      createObjectStoreIfMissing(database, DATABASE_STORES.shoppingLists, {
        keyPath: "id"
      });

      createObjectStoreIfMissing(database, DATABASE_STORES.pantryItems, {
        keyPath: "id"
      });
    };
  });
}

function createObjectStoreIfMissing(database, storeName, options) {
  if (database.objectStoreNames.contains(storeName)) {
    return;
  }

  database.createObjectStore(storeName, options);
}

/* <------------------------------------------------
      INDEXEDDB BASIC REQUEST HELPERS
   -------------------------------------------------> */

function getDatabaseStore(storeName, mode = "readonly") {
  if (!appState.db) {
    return null;
  }

  const transaction = appState.db.transaction(storeName, mode);

  return transaction.objectStore(storeName);
}

function getRecordFromStore(storeName, recordId) {
  return new Promise((resolve, reject) => {
    const store = getDatabaseStore(storeName, "readonly");

    if (!store) {
      resolve(null);
      return;
    }

    const request = store.get(recordId);

    request.onsuccess = () => {
      resolve(request.result || null);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

function saveRecordToStore(storeName, recordData) {
  return new Promise((resolve, reject) => {
    const store = getDatabaseStore(storeName, "readwrite");

    if (!store) {
      resolve(null);
      return;
    }

    const request = store.put(recordData);

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

/* <------------------------------------------------
      SETTINGS STORE
   -------------------------------------------------> */

async function loadSettingsFromDatabase() {
  try {
    const savedSettings = await getRecordFromStore(DATABASE_STORES.settings, "app-settings");

    if (!savedSettings) {
      appState.settings = { ...DEFAULT_SETTINGS };
      return;
    }

    appState.settings = {
      ...DEFAULT_SETTINGS,
      ...savedSettings.data
    };
		
		if (!THEME_PRESETS[appState.settings.themeId]) {
			appState.settings.themeId = DEFAULT_SETTINGS.themeId;
		}
		
  } catch (error) {
    console.warn("Settings could not be loaded. Defaults will be used.", error);
    appState.settings = { ...DEFAULT_SETTINGS };
  }
}

async function saveSettingsToDatabase() {
  try {
    await saveRecordToStore(DATABASE_STORES.settings, {
      id: "app-settings",
      data: { ...appState.settings },
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.warn("Settings could not be saved.", error);
  }
}

/* <------------------------------------------------
      RECIPES STORE
   -------------------------------------------------> */

function sanitizeRecipeCategories(categoryList) {
  if (!Array.isArray(categoryList)) {
    return [...DEFAULT_MONTH_CATEGORIES];
  }

  const validCategories = categoryList.filter((categoryName) => {
    return MEAL_CATEGORIES.includes(categoryName);
  });

  const uniqueValidCategories = [...new Set(validCategories)];

  return uniqueValidCategories.length > 0
    ? uniqueValidCategories
    : [...DEFAULT_MONTH_CATEGORIES];
}

function createRecipeRecord(recipeData) {
  const currentTimestamp = new Date().toISOString();

  return {
    id: recipeData.id || crypto.randomUUID(),
    title: recipeData.title || "Untitled Meal",
    categories: sanitizeRecipeCategories(recipeData.categories),
		description: recipeData.description || "",
		prepTime: recipeData.prepTime || "",
		cookTime: recipeData.cookTime || "",
		totalTime: recipeData.totalTime || "",
		servings: recipeData.servings || "",
		ingredients: Array.isArray(recipeData.ingredients) ? recipeData.ingredients : [],
    instructions: recipeData.instructions || "",
		notes: recipeData.notes || "",
		nutrition: recipeData.nutrition || "",
    sourceUrl: recipeData.sourceUrl || "",
    createdAt: recipeData.createdAt || currentTimestamp,
    updatedAt: currentTimestamp
  };
}

async function saveRecipeToDatabase(recipeData) {
  const recipeRecord = createRecipeRecord(recipeData);

  try {
    await saveRecordToStore(DATABASE_STORES.recipes, recipeRecord);
    return recipeRecord;
  } catch (error) {
    console.warn("Recipe could not be saved.", error);
    return null;
  }
}

function getAllRecipesFromDatabase() {
  return new Promise((resolve, reject) => {
    const store = getDatabaseStore(DATABASE_STORES.recipes, "readonly");

    if (!store) {
      resolve([]);
      return;
    }

    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result || []);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

async function deleteRecipeFromDatabase(recipeId) {
  try {
    const store = getDatabaseStore(DATABASE_STORES.recipes, "readwrite");

    if (!store) {
      return;
    }

    await new Promise((resolve, reject) => {
      const request = store.delete(recipeId);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.warn("Recipe could not be deleted.", error);
  }
}

/* <------------------------------------------------
      SHOPPING LISTS STORE
   -------------------------------------------------> */

function createShoppingListRecord(shoppingListData) {
  const currentTimestamp = new Date().toISOString();

  return {
    id: shoppingListData.id || crypto.randomUUID(),
    title: shoppingListData.title || "Shopping List",
    items: Array.isArray(shoppingListData.items) ? shoppingListData.items : [],
    createdAt: shoppingListData.createdAt || currentTimestamp,
    updatedAt: currentTimestamp
  };
}

async function saveShoppingListToDatabase(shoppingListData) {
  const shoppingListRecord = createShoppingListRecord(shoppingListData);

  try {
    await saveRecordToStore(DATABASE_STORES.shoppingLists, shoppingListRecord);
    return shoppingListRecord;
  } catch (error) {
    console.warn("Shopping list could not be saved.", error);
    return null;
  }
}

/* <------------------------------------------------
      DATABASE STORE EXPORT HELPER
   -------------------------------------------------> */

function getAllRecordsFromStore(storeName) {

  return new Promise((resolve, reject) => {
    const store = getDatabaseStore(storeName, "readonly");

    if (!store) {
      resolve([]);
      return;
    }

    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result || []);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });

}

function getAllShoppingListsFromDatabase() {
  return new Promise((resolve, reject) => {
    const store = getDatabaseStore(DATABASE_STORES.shoppingLists, "readonly");

    if (!store) {
      resolve([]);
      return;
    }

    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result || []);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

/* <------------------------------------------------
      PANTRY ITEMS STORE
   -------------------------------------------------> */

function getAllPantryItemsFromDatabase() {

  return new Promise((resolve, reject) => {
    const store = getDatabaseStore(DATABASE_STORES.pantryItems, "readonly");

    if (!store) {
      resolve([]);
      return;
    }

    const request = store.getAll();

    request.onsuccess = () => {
      resolve(request.result || []);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });

}

async function savePantryItemToDatabase(pantryItem) {

  try {
    await saveRecordToStore(DATABASE_STORES.pantryItems, pantryItem);
    return pantryItem;
  } catch (error) {
    console.warn("Pantry item could not be saved.", error);
    return null;
  }

}

async function saveDefaultPantryItemsToDatabase() {

  for (const pantryItem of appState.pantryItems) {
    await savePantryItemToDatabase(pantryItem);
  }

}

async function deletePantryItemFromDatabase(pantryItemId) {

  try {
    const store = getDatabaseStore(DATABASE_STORES.pantryItems, "readwrite");

    if (!store) {
      return;
    }

    await new Promise((resolve, reject) => {
      const request = store.delete(pantryItemId);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.warn("Pantry item could not be deleted.", error);
  }

}

async function deleteShoppingListFromDatabase(shoppingListId) {
  try {
    const store = getDatabaseStore(DATABASE_STORES.shoppingLists, "readwrite");

    if (!store) {
      return;
    }

    await new Promise((resolve, reject) => {
      const request = store.delete(shoppingListId);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.warn("Shopping list could not be deleted.", error);
  }
}

/* <------------------------------------------------
      DOM REFERENCE COLLECTION
   -------------------------------------------------> */

function collectDomReferences() {
  DOM.appTitle = document.getElementById("appTitle");
  DOM.appSubtitle = document.getElementById("appSubtitle");

  DOM.calendarNameInput = document.getElementById("calendarNameInput");
  DOM.monthSelect = document.getElementById("monthSelect");
  DOM.yearInput = document.getElementById("yearInput");

  DOM.printCalendarName = document.getElementById("printCalendarName");
  DOM.printMonthYear = document.getElementById("printMonthYear");
	
	DOM.calendarGrid = document.getElementById("calendarGrid");
	
	DOM.autoSaveToast = document.getElementById("autoSaveToast");
	
	DOM.menuToggleButton = document.getElementById("menuToggleButton");
	DOM.toggleDarkModeButton = document.getElementById("toggleDarkModeButton");
	DOM.hamburgerMenu = document.getElementById("hamburgerMenu");
	DOM.menuPrintButton = document.getElementById("menuPrintButton");
	DOM.menuRecipeBoxButton = document.getElementById("menuRecipeBoxButton");
	DOM.menuShoppingListButton = document.getElementById("menuShoppingListButton");
	DOM.menuPantryButton = document.getElementById("menuPantryButton");	
	
	DOM.menuConversionChartButton = document.getElementById("menuConversionChartButton");	
	
	DOM.menuAdminButton = document.getElementById("menuAdminButton");
	DOM.menuThemeButton = document.getElementById("menuThemeButton");
	DOM.menuAboutButton = document.getElementById("menuAboutButton");
	DOM.menuHelpButton = document.getElementById("menuHelpButton");

	DOM.adminButton = document.getElementById("adminButton");
	DOM.helpButton = document.getElementById("helpButton");
	DOM.printButton = document.getElementById("printButton");

	DOM.importDatabaseButton = document.getElementById("importDatabaseButton");
	DOM.importDatabaseFileInput = document.getElementById("importDatabaseFileInput");
	DOM.exportDatabaseButton = document.getElementById("exportDatabaseButton");
	DOM.exportCalendarCsvButton = document.getElementById("exportCalendarCsvButton");

	DOM.wipeDatabaseButton = document.getElementById("wipeDatabaseButton");
	DOM.wipeDatabaseDialog = document.getElementById("wipeDatabaseDialog");
	DOM.wipeDatabaseForm = document.getElementById("wipeDatabaseForm");
	DOM.wipeDatabasePhraseInput = document.getElementById("wipeDatabasePhraseInput");
	DOM.exitWipeDatabaseButton = document.getElementById("exitWipeDatabaseButton");
	DOM.wipeDatabaseFinalDialog = document.getElementById("wipeDatabaseFinalDialog");
	DOM.backupBeforeWipeButton = document.getElementById("backupBeforeWipeButton");
	DOM.confirmWipeDatabaseButton = document.getElementById("confirmWipeDatabaseButton");
	DOM.printButton = document.getElementById("printButton");

  DOM.loadMonthButton = document.getElementById("loadMonthButton");
	DOM.saveMonthButton = document.getElementById("saveMonthButton");
	DOM.copyMonthButton = document.getElementById("copyMonthButton");
	DOM.todayMonthButton = document.getElementById("todayMonthButton");
  DOM.randomizeMealsButton = document.getElementById("randomizeMealsButton");
  DOM.previousMonthButton = document.getElementById("previousMonthButton");
  DOM.nextMonthButton = document.getElementById("nextMonthButton");

  DOM.categoryBreakfast = document.getElementById("categoryBreakfast");
  DOM.categoryLunch = document.getElementById("categoryLunch");
  DOM.categoryDinner = document.getElementById("categoryDinner");
  DOM.categorySnackDessert = document.getElementById("categorySnackDessert");

	DOM.adminDialog = document.getElementById("adminDialog");
	DOM.themeFontDialog = document.getElementById("themeFontDialog");
	DOM.themePresetSelect = document.getElementById("themePresetSelect");
	DOM.calendarFontSelect = document.getElementById("calendarFontSelect");
	
	DOM.themeCalendarIcon = document.getElementById("themeCalendarIcon");
	
	DOM.helpDialog = document.getElementById("helpDialog");
	DOM.helpSections = Array.from(document.querySelectorAll(".help-section"));
	
	DOM.aboutDialog = document.getElementById("aboutDialog");
  DOM.aboutAppTitle = document.getElementById("aboutAppTitle");
  DOM.aboutAppVersion = document.getElementById("aboutAppVersion");
  DOM.aboutAppCredits = document.getElementById("aboutAppCredits");
  DOM.aboutAppDedication = document.getElementById("aboutAppDedication");
	
	DOM.welcomeDialog = document.getElementById("welcomeDialog");
	DOM.welcomeAppTitle = document.getElementById("welcomeAppTitle");
	DOM.welcomeAppVersion = document.getElementById("welcomeAppVersion");
	DOM.welcomeAppCredits = document.getElementById("welcomeAppCredits");
	DOM.welcomeAppDedication = document.getElementById("welcomeAppDedication");
	DOM.doNotShowWelcomeAgainCheckbox = document.getElementById("doNotShowWelcomeAgainCheckbox");
	DOM.closeWelcomeButton = document.getElementById("closeWelcomeButton");	
	
	DOM.addRecipeButton = document.getElementById("addRecipeButton");
	DOM.recipeList = document.getElementById("recipeList");
	DOM.recipeDialog = document.getElementById("recipeDialog");
	DOM.recipeForm = document.getElementById("recipeForm");
	DOM.recipeDialogTitle = document.getElementById("recipeDialogTitle");
	DOM.recipeIdInput = document.getElementById("recipeIdInput");
	DOM.recipeTitleInput = document.getElementById("recipeTitleInput");
	DOM.recipeDescriptionInput = document.getElementById("recipeDescriptionInput");
	DOM.recipePrepTimeInput = document.getElementById("recipePrepTimeInput");
	DOM.recipeCookTimeInput = document.getElementById("recipeCookTimeInput");
	DOM.recipeTotalTimeInput = document.getElementById("recipeTotalTimeInput");
	DOM.recipeServingsInput = document.getElementById("recipeServingsInput");
	DOM.recipeIngredientsInput = document.getElementById("recipeIngredientsInput");
	DOM.recipeInstructionsInput = document.getElementById("recipeInstructionsInput");
	DOM.recipeNotesInput = document.getElementById("recipeNotesInput");
	DOM.recipeNutritionInput = document.getElementById("recipeNutritionInput");
	DOM.recipeSourceUrlInput = document.getElementById("recipeSourceUrlInput");
	DOM.cancelRecipeButton = document.getElementById("cancelRecipeButton");
	DOM.deleteRecipeButton = document.getElementById("deleteRecipeButton");
	DOM.recipeCategoryCheckboxes = Array.from(document.querySelectorAll(".recipe-category-checkbox"));
	
	DOM.conversionChartDialog = document.getElementById("conversionChartDialog");
	DOM.closeConversionChartButton = document.getElementById("closeConversionChartButton");
	DOM.conversionChartBody = document.getElementById("conversionChartBody");
	
	DOM.pantryDialog = document.getElementById("pantryDialog");
	DOM.closePantryButton = document.getElementById("closePantryButton");
	DOM.pantryItemInput = document.getElementById("pantryItemInput");
	DOM.addPantryItemButton = document.getElementById("addPantryItemButton");
	DOM.pantryItemList = document.getElementById("pantryItemList");
	DOM.pantryTrashDropzone = document.getElementById("pantryTrashDropzone");
	
	DOM.shoppingListDialog = document.getElementById("shoppingListDialog");
	DOM.closeShoppingListButton = document.getElementById("closeShoppingListButton");
	DOM.generateShoppingListButton = document.getElementById("generateShoppingListButton");
	DOM.printShoppingListButton = document.getElementById("printShoppingListButton");
	DOM.shareShoppingListButton = document.getElementById("shareShoppingListButton");
	DOM.clearShoppingListButton = document.getElementById("clearShoppingListButton");
	DOM.shoppingListItems = document.getElementById("shoppingListItems");
	
	DOM.recipeBoxDialog = document.getElementById("recipeBoxDialog");
	DOM.closeRecipeBoxButton = document.getElementById("closeRecipeBoxButton");
	DOM.recipeBoxFilterSelect = document.getElementById("recipeBoxFilterSelect");
	DOM.recipeBoxAddRecipeButton = document.getElementById("recipeBoxAddRecipeButton");
	DOM.recipeBoxImportRecipeButton = document.getElementById("recipeBoxImportRecipeButton");
	DOM.importRecipeFileInput = document.getElementById("importRecipeFileInput");
	DOM.recipeBoxList = document.getElementById("recipeBoxList");
	
	DOM.recipeViewDialog = document.getElementById("recipeViewDialog");
	DOM.closeRecipeViewButton = document.getElementById("closeRecipeViewButton");
	DOM.recipeViewTitle = document.getElementById("recipeViewTitle");
	DOM.recipeViewDescription = document.getElementById("recipeViewDescription");
	DOM.recipeViewCategories = document.getElementById("recipeViewCategories");
	DOM.recipeViewTimeRow = document.getElementById("recipeViewTimeRow");
	DOM.recipeViewPrepTime = document.getElementById("recipeViewPrepTime");
	DOM.recipeViewCookTime = document.getElementById("recipeViewCookTime");
	DOM.recipeViewTotalTime = document.getElementById("recipeViewTotalTime");
	DOM.recipeViewServings = document.getElementById("recipeViewServings");
	DOM.recipeViewIngredients = document.getElementById("recipeViewIngredients");
	DOM.recipeViewInstructions = document.getElementById("recipeViewInstructions");
	DOM.recipeViewNotes = document.getElementById("recipeViewNotes");
	DOM.recipeViewNutrition = document.getElementById("recipeViewNutrition");
	DOM.recipeViewSource = document.getElementById("recipeViewSource");
	DOM.editViewedRecipeButton = document.getElementById("editViewedRecipeButton");
	DOM.shareViewedRecipeButton = document.getElementById("shareViewedRecipeButton");
	DOM.exportViewedRecipeButton = document.getElementById("exportViewedRecipeButton");
	
	DOM.assignmentPanel = document.getElementById("assignmentPanel");
	DOM.closeAssignmentPanelButton = document.getElementById("closeAssignmentPanelButton");
	DOM.openRandomizeButton = document.getElementById("openRandomizeButton");
	DOM.clearCalendarMonthButton = document.getElementById("clearCalendarMonthButton");
	DOM.randomizeDialog = document.getElementById("randomizeDialog");
	DOM.randomizeForm = document.getElementById("randomizeForm");
	DOM.closeRandomizeButton = document.getElementById("closeRandomizeButton");
	DOM.randomizeCategoryCheckboxes = Array.from(document.querySelectorAll(".randomize-category-checkbox"));
	DOM.randomizeVarianceSlider = document.getElementById("randomizeVarianceSlider");
	DOM.randomizeVarianceDescription = document.getElementById("randomizeVarianceDescription");
	
	DOM.copyMonthDialog = document.getElementById("copyMonthDialog");
	DOM.copyMonthForm = document.getElementById("copyMonthForm");
	DOM.closeCopyMonthButton = document.getElementById("closeCopyMonthButton");
	DOM.copyMonthSourceText = document.getElementById("copyMonthSourceText");
	DOM.copyMonthTargetMonthSelect = document.getElementById("copyMonthTargetMonthSelect");
	DOM.copyMonthTargetYearInput = document.getElementById("copyMonthTargetYearInput");

	DOM.assignmentTrashDropzone = document.getElementById("assignmentTrashDropzone");
	DOM.assignmentFilterToggleButton = document.getElementById("assignmentFilterToggleButton");
	DOM.assignmentFilterOptions = document.getElementById("assignmentFilterOptions");
	DOM.assignmentRecipeList = document.getElementById("assignmentRecipeList");

	DOM.slotChoiceDialog = document.getElementById("slotChoiceDialog");
	DOM.slotChoiceMessage = document.getElementById("slotChoiceMessage");
	DOM.slotChoiceOptions = document.getElementById("slotChoiceOptions");
	DOM.cancelSlotChoiceButton = document.getElementById("cancelSlotChoiceButton");
	DOM.assignmentFilterCheckboxes = Array.from(document.querySelectorAll(".assignment-filter-checkbox"));
}

/* <------------------------------------------------
      WELCOME WINDOW SYSTEM
   -------------------------------------------------> */

function shouldShowWelcomeDialog() {

  return appState.settings.hideWelcomeScreen !== true;

}

function showWelcomeDialogIfNeeded() {

  if (!DOM.welcomeDialog) {
    return;
  }

  if (!shouldShowWelcomeDialog()) {
    return;
  }

  openDialog(DOM.welcomeDialog);

}

async function closeWelcomeDialog() {

  if (DOM.doNotShowWelcomeAgainCheckbox?.checked) {
    appState.settings.hideWelcomeScreen = true;

    await saveSettingsToDatabase();
  }

  if (DOM.welcomeDialog) {
    DOM.welcomeDialog.close();
  }

}

/* <------------------------------------------------
      APP INFORMATION DISPLAY
   -------------------------------------------------> */

function applyAppInformation() {
  if (DOM.appTitle) {
    DOM.appTitle.textContent = APP_TITLE;
  }

  if (DOM.aboutAppTitle) {
    DOM.aboutAppTitle.textContent = APP_TITLE;
  }

  if (DOM.aboutAppVersion) {
    DOM.aboutAppVersion.textContent = APP_VERSION;
  }

  if (DOM.aboutAppCredits) {
    DOM.aboutAppCredits.textContent = APP_CREDITS;
  }

  if (DOM.aboutAppDedication) {
    DOM.aboutAppDedication.textContent = APP_DEDICATION;
  }
	
	  if (DOM.welcomeAppTitle) {
    DOM.welcomeAppTitle.textContent = APP_TITLE;
  }

  if (DOM.welcomeAppVersion) {
    DOM.welcomeAppVersion.textContent = APP_VERSION;
  }

  if (DOM.welcomeAppCredits) {
    DOM.welcomeAppCredits.textContent = APP_CREDITS;
  }

  if (DOM.welcomeAppDedication) {
    DOM.welcomeAppDedication.textContent = APP_DEDICATION;
  }
	
}

/* <------------------------------------------------
      INITIAL DATE SETUP
   -------------------------------------------------> */

function applyInitialDateValues() {
  const currentMonth = appState.currentDate.getMonth();
  const currentYear = appState.currentDate.getFullYear();

  appState.calendar.activeMonthIndex = currentMonth;
  appState.calendar.activeYear = currentYear;

  if (DOM.monthSelect) {
    DOM.monthSelect.value = String(currentMonth);
  }

  if (DOM.yearInput) {
    DOM.yearInput.value = String(currentYear);
  }

  updateCalendarDateEngine();
  updateVisibleMonthYear();
	renderCalendarGrid();
}

/* <------------------------------------------------
      THEME APPLICATION SYSTEM
   -------------------------------------------------> */

function applyThemePreset(themeId) {
  const themePreset = THEME_PRESETS[themeId] || THEME_PRESETS["classic-blue"];

  Object.entries(themePreset.colors).forEach(([cssVariableName, cssVariableValue]) => {
    document.documentElement.style.setProperty(cssVariableName, cssVariableValue);
  });

  appState.settings.themeId = themeId in THEME_PRESETS
    ? themeId
    : "classic-blue";
}

function applyThemeToScreen() {
  applyThemePreset(appState.settings.themeId);
  updateThemeCalendarIcon();
}

function updateThemeCalendarIcon() {
  if (!DOM.themeCalendarIcon) {
    return;
  }

  const themePreset =
    THEME_PRESETS[appState.settings.themeId] ||
    THEME_PRESETS["classic-blue"];

  DOM.themeCalendarIcon.textContent = themePreset.icon || "💎";
}

function applyThemeSelectToScreen() {
  if (!DOM.themePresetSelect) {
    return;
  }

  DOM.themePresetSelect.value = appState.settings.themeId;
}

async function handleThemePresetChange() {
  if (!DOM.themePresetSelect) {
    return;
  }

  appState.settings.themeId = DOM.themePresetSelect.value;

  applyThemeToScreen();

  await saveSettingsToDatabase();
}

/* <------------------------------------------------
      FONT APPLICATION FOUNDATION
   -------------------------------------------------> */

function applyFontStyles() {

  document.documentElement.style.setProperty(
    "--calendar-title-font",
    appState.settings.titleFont
  );

  document.documentElement.style.setProperty(
    "--calendar-month-font",
    appState.settings.monthFont
  );

  document.documentElement.style.setProperty(
    "--calendar-day-number-font",
    appState.settings.dayNumberFont
  );

}

/* <------------------------------------------------
      CALENDAR FONT FOUNDATION
     -------------------------------------------------> */

function applyCalendarFontSelectToScreen() {

  if (!DOM.calendarFontSelect) {
    return;
  }

  DOM.calendarFontSelect.value = appState.settings.titleFont;

}

async function handleCalendarFontChange() {

  if (!DOM.calendarFontSelect) {
    return;
  }

  appState.settings.titleFont = DOM.calendarFontSelect.value;
  appState.settings.monthFont = DOM.calendarFontSelect.value;
  appState.settings.dayNumberFont = DOM.calendarFontSelect.value;

  applyFontStyles();

  await saveSettingsToDatabase();

}

/* <------------------------------------------------
      SETTINGS DISPLAY FOUNDATION
   -------------------------------------------------> */

function applySettingsToScreen() {
  if (DOM.calendarNameInput) {
    DOM.calendarNameInput.value = appState.settings.calendarName;
  }

  applyCategoriesToCheckboxes(appState.settings.activeCategories);

	updateCalendarTitleDisplays();

	applyThemeToScreen();
	applyThemeSelectToScreen();
	
	applyFontStyles();
	applyCalendarFontSelectToScreen();

	document.body.classList.toggle("dark-mode", appState.settings.darkMode);
}

/* <------------------------------------------------
      BASE EVENT LISTENERS
   -------------------------------------------------> */

function connectBaseEventListeners() {
  if (DOM.calendarNameInput) {
    DOM.calendarNameInput.addEventListener("input", handleCalendarNameInput);
  }

  if (DOM.monthSelect) {
		DOM.monthSelect.addEventListener("change", autoLoadSelectedMonth);
	}

	if (DOM.yearInput) {
		DOM.yearInput.addEventListener("change", autoLoadSelectedMonth);
	}

  if (DOM.previousMonthButton) {
    DOM.previousMonthButton.addEventListener("click", goToPreviousMonth);
  }

  if (DOM.nextMonthButton) {
    DOM.nextMonthButton.addEventListener("click", goToNextMonth);
  }
	
	if (DOM.closeWelcomeButton) {
		DOM.closeWelcomeButton.addEventListener("click", closeWelcomeDialog);
	}
	
	if (DOM.menuToggleButton) {
  DOM.menuToggleButton.addEventListener("click", toggleHamburgerMenu);
	}
	
	if (DOM.toggleDarkModeButton) {
		DOM.toggleDarkModeButton.addEventListener("click", toggleDarkMode);
	}
	
	if (DOM.themePresetSelect) {
		DOM.themePresetSelect.addEventListener("change", handleThemePresetChange);
	}
	
	if (DOM.calendarFontSelect) {
		DOM.calendarFontSelect.addEventListener("change", handleCalendarFontChange);
	}

	if (DOM.menuPrintButton) {
		DOM.menuPrintButton.addEventListener("click", () => {
			closeHamburgerMenu();
			window.print();
		});
	}

	if (DOM.menuRecipeBoxButton) {
		DOM.menuRecipeBoxButton.addEventListener("click", () => {
			closeHamburgerMenu();
			openRecipeBoxDialog();
		});
	}
	
		if (DOM.menuConversionChartButton) {
			DOM.menuConversionChartButton.addEventListener("click", () => {
				closeHamburgerMenu();
				renderConversionChart();
				openDialog(DOM.conversionChartDialog);
			});
		}
	
		if (DOM.menuPantryButton) {
		DOM.menuPantryButton.addEventListener("click", () => {
			closeHamburgerMenu();
			renderPantryItemList();
			openDialog(DOM.pantryDialog);
		});
	}
	
	if (DOM.menuShoppingListButton) {
		DOM.menuShoppingListButton.addEventListener("click", () => {
			closeHamburgerMenu();
			loadCurrentShoppingListDisplay();
			openDialog(DOM.shoppingListDialog);
		});
	}

	if (DOM.menuAdminButton) {
		DOM.menuAdminButton.addEventListener("click", () => {
			closeHamburgerMenu();
			openDialog(DOM.adminDialog);
		});
	}

	if (DOM.menuThemeButton) {
		DOM.menuThemeButton.addEventListener("click", () => {
			closeHamburgerMenu();
			openDialog(DOM.themeFontDialog);
		});
	}

	if (DOM.menuAboutButton) {
		DOM.menuAboutButton.addEventListener("click", () => {
			closeHamburgerMenu();
			openDialog(DOM.aboutDialog);
		});
	}

	if (DOM.menuHelpButton) {
		DOM.menuHelpButton.addEventListener("click", () => {
			closeHamburgerMenu();
			openDialog(DOM.helpDialog);
		});
	}

	if (DOM.adminButton) {
		DOM.adminButton.addEventListener("click", () => openDialog(DOM.adminDialog));
	}

	if (DOM.helpButton) {
		DOM.helpButton.addEventListener("click", () => openDialog(DOM.helpDialog));
	}
	
		DOM.helpSections.forEach((helpSection) => {

		helpSection.addEventListener("click", () => {

			helpSection.classList.toggle("open");

		});

	});

  if (DOM.printButton) {
    DOM.printButton.addEventListener("click", () => window.print());
  }
	
	if (DOM.saveMonthButton) {
		DOM.saveMonthButton.addEventListener("click", saveCurrentMonthFoundation);
	}

	if (DOM.copyMonthButton) {
		DOM.copyMonthButton.addEventListener("click", openCopyMonthDialog);
	}

	if (DOM.todayMonthButton) {
		DOM.todayMonthButton.addEventListener("click", goToCurrentMonth);
	}

  if (DOM.randomizeMealsButton) {
    DOM.randomizeMealsButton.addEventListener("click", showFeatureComingLaterMessage);
  }
	
	if (DOM.addRecipeButton) {
  DOM.addRecipeButton.addEventListener("click", openNewRecipeDialog);
	}

	if (DOM.recipeForm) {
		DOM.recipeForm.addEventListener("submit", handleRecipeFormSubmit);
	}

	if (DOM.cancelRecipeButton) {
		DOM.cancelRecipeButton.addEventListener("click", closeRecipeDialog);
	}

	if (DOM.deleteRecipeButton) {
		DOM.deleteRecipeButton.addEventListener("click", handleDeleteRecipe);
	}

	if (DOM.importDatabaseButton) {
		DOM.importDatabaseButton.addEventListener("click", openBackupImportFilePicker);
	}

	if (DOM.importDatabaseFileInput) {
		DOM.importDatabaseFileInput.addEventListener("change", handleBackupImportFileSelection);
	}

	if (DOM.exportDatabaseButton) {
		DOM.exportDatabaseButton.addEventListener("click", exportFullDatabaseBackup);
	}
	
	if (DOM.exportCalendarCsvButton) {
		DOM.exportCalendarCsvButton.addEventListener("click", exportCalendarCsv);
	}
	
	if (DOM.shareViewedRecipeButton) {
		DOM.shareViewedRecipeButton.addEventListener("click", shareViewedRecipe);
	}
	
	if (DOM.exportViewedRecipeButton) {
		DOM.exportViewedRecipeButton.addEventListener("click", exportViewedRecipe);
	}

	if (DOM.wipeDatabaseButton) {
		DOM.wipeDatabaseButton.addEventListener("click", openWipeDatabaseDialog);
	}

	if (DOM.exitWipeDatabaseButton) {
		DOM.exitWipeDatabaseButton.addEventListener("click", closeWipeDatabaseDialog);
	}

	if (DOM.wipeDatabaseForm) {
		DOM.wipeDatabaseForm.addEventListener("submit", handleWipeDatabasePhraseSubmit);
	}

	if (DOM.backupBeforeWipeButton) {
		DOM.backupBeforeWipeButton.addEventListener("click", returnToAdminFromFinalWipeWarning);
	}

	if (DOM.confirmWipeDatabaseButton) {
		DOM.confirmWipeDatabaseButton.addEventListener("click", wipeEntireDatabase);
	}
	
	if (DOM.copyMonthForm) {
		DOM.copyMonthForm.addEventListener("submit", copyCurrentMonthToTargetMonth);
	}

	if (DOM.closeCopyMonthButton) {
		DOM.closeCopyMonthButton.addEventListener("click", closeCopyMonthDialog);
	}
	
	if (DOM.closeAssignmentPanelButton) {
		DOM.closeAssignmentPanelButton.addEventListener("click", closeAssignmentPanel);
	}

	DOM.assignmentFilterCheckboxes.forEach((checkbox) => {
		checkbox.addEventListener("change", renderAssignmentRecipeList);
	});
	
	if (DOM.assignmentFilterToggleButton) {
		DOM.assignmentFilterToggleButton.addEventListener("click", toggleAssignmentFilters);
	}
	
	if (DOM.openRandomizeButton) {
		DOM.openRandomizeButton.addEventListener("click", openRandomizeDialog);
	}
	
	if (DOM.clearCalendarMonthButton) {
		DOM.clearCalendarMonthButton.addEventListener("click", clearCurrentCalendarMonth);
		}

	if (DOM.closeRandomizeButton) {
		DOM.closeRandomizeButton.addEventListener("click", closeRandomizeDialog);
	}

	if (DOM.randomizeForm) {
		DOM.randomizeForm.addEventListener("submit", handleRandomizeCalendar);
	}

	if (DOM.randomizeVarianceSlider) {
		DOM.randomizeVarianceSlider.addEventListener("input", updateRandomizeVarianceDescription);
	}
	
	if (DOM.assignmentTrashDropzone) {
  DOM.assignmentTrashDropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
    DOM.assignmentTrashDropzone.classList.add("drag-over-trash");
  });

  DOM.assignmentTrashDropzone.addEventListener("dragleave", () => {
    DOM.assignmentTrashDropzone.classList.remove("drag-over-trash");
  });

  DOM.assignmentTrashDropzone.addEventListener("drop", async (event) => {
    event.preventDefault();

    DOM.assignmentTrashDropzone.classList.remove("drag-over-trash");

    const dayNumber = Number(event.dataTransfer.getData("application/x-calendar-day"));
    const recipeId = event.dataTransfer.getData("application/x-calendar-recipe");

    if (!dayNumber || !recipeId) {
      return;
    }

    await removeRecipeFromCalendarDay(dayNumber, recipeId);
  });
}
	
		if (DOM.closeConversionChartButton) {
			DOM.closeConversionChartButton.addEventListener("click", closeConversionChartDialog);
		}
	
	if (DOM.closePantryButton) {
		DOM.closePantryButton.addEventListener("click", closePantryDialog);
	}
	
	if (DOM.addPantryItemButton) {
		DOM.addPantryItemButton.addEventListener("click", addPantryItemFromInput);
	}
	
		if (DOM.pantryItemInput) {
		DOM.pantryItemInput.addEventListener("keydown", (event) => {

			if (event.key !== "Enter") {
				return;
			}

			event.preventDefault();
			addPantryItemFromInput();

		});
	}
	
		if (DOM.pantryTrashDropzone) {

		DOM.pantryTrashDropzone.addEventListener("dragover", (event) => {
			event.preventDefault();
			DOM.pantryTrashDropzone.classList.add("drag-over-trash");
		});

		DOM.pantryTrashDropzone.addEventListener("dragleave", () => {
			DOM.pantryTrashDropzone.classList.remove("drag-over-trash");
		});

		DOM.pantryTrashDropzone.addEventListener("drop", async (event) => {
			event.preventDefault();

			DOM.pantryTrashDropzone.classList.remove("drag-over-trash");

			const pantryItemId =
				event.dataTransfer.getData("application/x-pantry-item");

			if (!pantryItemId) {
				return;
			}

			await deletePantryItem(pantryItemId);

		});

	}
	
	if (DOM.closeShoppingListButton) {
		DOM.closeShoppingListButton.addEventListener("click", closeShoppingListDialog);
	}
	
	if (DOM.generateShoppingListButton) {
		DOM.generateShoppingListButton.addEventListener("click", generateShoppingListFromCalendar);
	}
	
	if (DOM.printShoppingListButton) {
		DOM.printShoppingListButton.addEventListener("click", printShoppingList);
	}
	
	if (DOM.shareShoppingListButton) {
		DOM.shareShoppingListButton.addEventListener("click", shareShoppingList);
	}

	if (DOM.clearShoppingListButton) {
		DOM.clearShoppingListButton.addEventListener("click", clearShoppingListDisplay);
	}
	
	if (DOM.closeRecipeBoxButton) {
		DOM.closeRecipeBoxButton.addEventListener("click", closeRecipeBoxDialog);
	}

	if (DOM.recipeBoxFilterSelect) {
		DOM.recipeBoxFilterSelect.addEventListener("change", renderRecipeBoxList);
	}

	if (DOM.recipeBoxAddRecipeButton) {
		DOM.recipeBoxAddRecipeButton.addEventListener("click", openNewRecipeDialog);
  }
	
	if (DOM.recipeBoxImportRecipeButton) {
		DOM.recipeBoxImportRecipeButton.addEventListener("click", openSingleRecipeImportFilePicker);
	}
	
	if (DOM.importRecipeFileInput) {
		DOM.importRecipeFileInput.addEventListener("change", handleSingleRecipeImportFileSelection);
	}
	
	if (DOM.closeRecipeViewButton) {
  DOM.closeRecipeViewButton.addEventListener("click", closeRecipeViewDialog);
  }

	if (DOM.editViewedRecipeButton) {
		DOM.editViewedRecipeButton.addEventListener("click", editCurrentlyViewedRecipe);
	}
	
	if (DOM.cancelSlotChoiceButton) {
		DOM.cancelSlotChoiceButton.addEventListener("click", cancelSlotChoiceDialog);
	}
}

/* <------------------------------------------------
      CATEGORY ENGINE
   -------------------------------------------------> */

function readCategoriesFromCheckboxes() {
  const categoryCheckboxes = [
    DOM.categoryBreakfast,
    DOM.categoryLunch,
    DOM.categoryDinner,
    DOM.categorySnackDessert
  ];

  return categoryCheckboxes
    .filter((checkbox) => checkbox && checkbox.checked)
    .map((checkbox) => checkbox.value);
}

function applyCategoriesToCheckboxes(categoryList) {
  const safeCategoryList =
    Array.isArray(categoryList) && categoryList.length > 0
      ? categoryList
      : [...DEFAULT_MONTH_CATEGORIES];

  const categoryCheckboxes = [
    DOM.categoryBreakfast,
    DOM.categoryLunch,
    DOM.categoryDinner,
    DOM.categorySnackDessert
  ];

  categoryCheckboxes.forEach((checkbox) => {
    if (!checkbox) {
      return;
    }

    checkbox.checked = safeCategoryList.includes(checkbox.value);
  });
}

function synchronizeCategoryState() {
  appState.settings.activeCategories = readCategoriesFromCheckboxes();

  saveSettingsToDatabase();
}

/* <------------------------------------------------
      MEAL CATEGORY VALIDATION
   -------------------------------------------------> */

function enforceAtLeastOneMealCategory(event) {
  const checkedCategories = readCategoriesFromCheckboxes();

  if (checkedCategories.length > 0) {
    synchronizeCategoryState();
    return;
  }

  event.target.checked = true;

  synchronizeCategoryState();

  alert("At least one meal category must stay selected.");
}

/* <------------------------------------------------
      CALENDAR TITLE DISPLAY SYSTEM
   -------------------------------------------------> */

function updateCalendarTitleFromInput() {
  const rawCalendarName = DOM.calendarNameInput?.value || "";
  const cleanCalendarName = rawCalendarName.trim() || DEFAULT_SETTINGS.calendarName;

  appState.settings.calendarName = cleanCalendarName;

  updateCalendarTitleDisplays();
  saveSettingsToDatabase();
  autoSaveCurrentMonthCategories();
}

function updateCalendarTitleDisplays() {
  if (DOM.printCalendarName) {
    DOM.printCalendarName.textContent = appState.settings.calendarName;
  }
}

/* <------------------------------------------------
      CALENDAR NAME HANDLER
   -------------------------------------------------> */

function handleCalendarNameInput() {
  updateCalendarTitleFromInput();
}

/* <------------------------------------------------
      SINGLE RECIPE SHARE SYSTEM
   -------------------------------------------------> */

async function shareViewedRecipe() {

  if (!appState.viewedRecipeId) {
    alert("No recipe is currently selected.");
    return;
  }

  const recipe =
    getRecipeById(appState.viewedRecipeId);

  if (!recipe) {
    alert("Unable to find recipe.");
    return;
  }

  const recipeText =
    buildRecipeShareText(recipe);

  if (navigator.share) {

    try {

      await navigator.share({
        title: recipe.title,
        text: recipeText
      });

      return;

    } catch (error) {

      console.warn(
        "Native recipe share unavailable.",
        error
      );

    }

  }

  downloadRecipeTextFile(recipe, recipeText);

  alert(
    "Native sharing is not supported on this device/browser.\n\nRecipe text file downloaded instead."
  );

}

function buildRecipeShareText(recipe) {

  const lines = [
    recipe.title || "Recipe",
    ""
  ];

  if (recipe.description) {
    lines.push("Description:");
    lines.push(recipe.description);
    lines.push("");
  }

  if (Array.isArray(recipe.categories) && recipe.categories.length > 0) {
    lines.push("Categories:");
    lines.push(recipe.categories.join(", "));
    lines.push("");
  }

  if (Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0) {
    lines.push("Ingredients:");

    recipe.ingredients.forEach((ingredient) => {
      lines.push(`- ${ingredient}`);
    });

    lines.push("");
  }

  if (recipe.instructions) {
    lines.push("Instructions:");
    lines.push(recipe.instructions);
    lines.push("");
  }

  if (recipe.sourceUrl) {
    lines.push("Source:");
    lines.push(recipe.sourceUrl);
  }

  return lines.join("\n");

}

function downloadRecipeTextFile(recipe, recipeText) {

  const textBlob =
    new Blob(
      [recipeText],
      {
        type: "text/plain"
      }
    );

  const downloadUrl =
    URL.createObjectURL(textBlob);

  const downloadLink =
    document.createElement("a");

  downloadLink.href = downloadUrl;
  downloadLink.download =
    buildRecipeTextFileName(recipe);

  document.body.appendChild(downloadLink);

  downloadLink.click();

  downloadLink.remove();

  URL.revokeObjectURL(downloadUrl);

}

function buildRecipeTextFileName(recipe) {

  const safeTitle =
    (recipe.title || "Recipe")
      .replace(/[<>:"/\\|?*]+/g, "")
      .trim()
      .replace(/\s+/g, "_");

  return `TUMP_Recipe_${safeTitle}.txt`;

}

/* <------------------------------------------------
      SINGLE RECIPE EXPORT SYSTEM
     -------------------------------------------------> */

async function exportViewedRecipe() {

  if (!appState.viewedRecipeId) {
    alert("No recipe is currently selected.");
    return;
  }

  const recipe =
    getRecipeById(appState.viewedRecipeId);

  if (!recipe) {
    alert("Unable to find recipe.");
    return;
  }

  const exportData = {
    appTitle: APP_TITLE,
    appVersion: APP_VERSION,
    exportType: "single-recipe",
    createdAt: new Date().toISOString(),
    recipe
  };

  const exportJson =
    JSON.stringify(exportData, null, 2);

  const fileName =
    buildRecipeExportFileName(recipe);

  const exportBlob =
    new Blob(
      [exportJson],
      {
        type: "application/json"
      }
    );

  /* <------------------------------------------------
      NATIVE DEVICE SHARE SUPPORT
   -------------------------------------------------> */

  if (
    navigator.share &&
    navigator.canShare
  ) {

    try {

      const shareFile =
        new File(
          [exportBlob],
          fileName,
          {
            type: "application/json"
          }
        );

      if (
        navigator.canShare({
          files: [shareFile]
        })
      ) {

        await navigator.share({
          title: recipe.title,
          text: `Recipe shared from ${APP_TITLE}`,
          files: [shareFile]
        });

        return;

      }

    } catch (error) {

      console.warn(
        "Native share unavailable. Falling back to download.",
        error
      );

    }

  }

  /* <------------------------------------------------
      DOWNLOAD FALLBACK
   -------------------------------------------------> */

  const downloadUrl =
    URL.createObjectURL(exportBlob);

  const downloadLink =
    document.createElement("a");

  downloadLink.href = downloadUrl;
  downloadLink.download = fileName;

  document.body.appendChild(downloadLink);

  downloadLink.click();

  downloadLink.remove();

  URL.revokeObjectURL(downloadUrl);

  alert(
    "Native sharing is not supported on this device/browser.\n\nRecipe file downloaded instead."
  );

}

function buildRecipeExportFileName(recipe) {

  const safeTitle =
    (recipe.title || "Recipe")
      .replace(/[<>:"/\\|?*]+/g, "")
      .trim()
      .replace(/\s+/g, "_");

  return `TUMP_Recipe_${safeTitle}.json`;

}

/* <------------------------------------------------
      CALENDAR CSV EXPORT SYSTEM
   -------------------------------------------------> */

function exportCalendarCsv() {

  const csvRows = buildCurrentCalendarCsvRows();
  const csvText = csvRowsToText(csvRows);
  const csvBlob = new Blob([csvText], {
    type: "text/csv;charset=utf-8;"
  });

  const downloadUrl = URL.createObjectURL(csvBlob);
  const downloadLink = document.createElement("a");

  downloadLink.href = downloadUrl;
  downloadLink.download = buildCalendarCsvFileName();

  document.body.appendChild(downloadLink);
  downloadLink.click();

  downloadLink.remove();
  URL.revokeObjectURL(downloadUrl);
	alert("Calendar CSV exported successfully.");

}

function buildCurrentCalendarCsvRows() {

  const monthData = getCurrentMonthWorkingData();

  const rows = [
    [
      "Date",
      "Day",
      "Category",
      "Recipe"
    ]
  ];

  for (let dayNumber = 1; dayNumber <= appState.calendar.daysInMonth; dayNumber += 1) {
    const dayDate = new Date(
      appState.calendar.activeYear,
      appState.calendar.activeMonthIndex,
      dayNumber
    );

    const dayName = dayDate.toLocaleDateString(undefined, {
      weekday: "long"
    });

    const dayKey = String(dayNumber);
    const meals = getDayMealSlots(monthData.days?.[dayKey]);

    MEAL_CATEGORIES.forEach((categoryName) => {
      const recipeId = meals[categoryName] || "";
      const recipe = recipeId ? getRecipeById(recipeId) : null;

      rows.push([
        formatCsvDate(dayDate),
        dayName,
        categoryName,
        recipe ? recipe.title : ""
      ]);
    });
  }

  return rows;

}

function csvRowsToText(rows) {

  return rows
    .map((row) => {
      return row
        .map((cellValue) => escapeCsvCell(cellValue))
        .join(",");
    })
    .join("\r\n");

}

function escapeCsvCell(cellValue) {

  const textValue = String(cellValue ?? "");

  if (
    textValue.includes(",") ||
    textValue.includes("\"") ||
    textValue.includes("\n") ||
    textValue.includes("\r")
  ) {
    return `"${textValue.replaceAll("\"", "\"\"")}"`;
  }

  return textValue;

}

function formatCsvDate(dateValue) {

  const year = dateValue.getFullYear();
  const month = String(dateValue.getMonth() + 1).padStart(2, "0");
  const day = String(dateValue.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;

}

function buildCalendarCsvFileName() {

  const monthName = getMonthName(appState.calendar.activeMonthIndex);
  const year = appState.calendar.activeYear;

  return `TUMP_Calendar_${monthName}_${year}.csv`;

}

/* <------------------------------------------------
      FULL DATABASE IMPORT SYSTEM
   -------------------------------------------------> */

function openBackupImportFilePicker() {

  if (!DOM.importDatabaseFileInput) {
    return;
  }

  DOM.importDatabaseFileInput.value = "";
  DOM.importDatabaseFileInput.click();

}

async function handleBackupImportFileSelection() {

  const selectedFile = DOM.importDatabaseFileInput?.files?.[0];

  if (!selectedFile) {
    return;
  }

  try {
    const backupText = await selectedFile.text();
    const backupData = JSON.parse(backupText);

    validateBackupData(backupData);

    const confirmed = confirm(
			"This backup file looks valid.\n\nRestoring it will overwrite the current app database on this device.\n\nContinue with restore?"
		);

		if (!confirmed) {
			return;
		}

		await restoreFullDatabaseBackup(backupData);

		alert("Backup restored successfully. The app will now reload.");

		window.location.reload();
  } catch (error) {
    console.warn("Backup import validation failed.", error);
    alert("This does not appear to be a valid Ultimate Meal Planner backup file.");
  }

}

function validateBackupData(backupData) {

  if (!backupData || typeof backupData !== "object") {
    throw new Error("Backup data is missing or invalid.");
  }

  if (backupData.backupType !== "full-database") {
    throw new Error("Backup type is not supported.");
  }

  if (!backupData.data || typeof backupData.data !== "object") {
    throw new Error("Backup data section is missing.");
  }

  const requiredStores = [
    "settings",
    "recipes",
    "calendarMonths",
    "shoppingLists",
		"pantryItems"
  ];

  requiredStores.forEach((storeName) => {
    if (!Array.isArray(backupData.data[storeName])) {
      throw new Error(`${storeName} must be an array.`);
    }
  });

}

/* <------------------------------------------------
      FULL DATABASE RESTORE SYSTEM
   -------------------------------------------------> */

async function restoreFullDatabaseBackup(backupData) {

  await clearStore(DATABASE_STORES.settings);
  await clearStore(DATABASE_STORES.recipes);
  await clearStore(DATABASE_STORES.calendarMonths);
  await clearStore(DATABASE_STORES.shoppingLists);
	await clearStore(DATABASE_STORES.pantryItems);

  await restoreRecordsToStore(DATABASE_STORES.settings, backupData.data.settings);
  await restoreRecordsToStore(DATABASE_STORES.recipes, backupData.data.recipes);
  await restoreRecordsToStore(DATABASE_STORES.calendarMonths, backupData.data.calendarMonths);
  await restoreRecordsToStore(DATABASE_STORES.shoppingLists, backupData.data.shoppingLists);
	await restoreRecordsToStore(DATABASE_STORES.pantryItems, backupData.data.pantryItems);

}

function clearStore(storeName) {

  return new Promise((resolve, reject) => {
    const store = getDatabaseStore(storeName, "readwrite");

    if (!store) {
      resolve();
      return;
    }

    const request = store.clear();

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = () => {
      reject(request.error);
    };
  });

}

function restoreRecordsToStore(storeName, records) {

  return new Promise((resolve, reject) => {
    const store = getDatabaseStore(storeName, "readwrite");

    if (!store) {
      resolve();
      return;
    }

    const recordList = Array.isArray(records) ? records : [];

    if (recordList.length === 0) {
      resolve();
      return;
    }

    let completedCount = 0;

    recordList.forEach((record) => {
      const request = store.put(record);

      request.onsuccess = () => {
        completedCount += 1;

        if (completedCount === recordList.length) {
          resolve();
        }
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  });

}

/* <------------------------------------------------
      FULL DATABASE EXPORT SYSTEM
   -------------------------------------------------> */

async function exportFullDatabaseBackup() {

	const savedSettingsRecords = await getAllRecordsFromStore(DATABASE_STORES.settings);
	const savedRecipeRecords = await getAllRecordsFromStore(DATABASE_STORES.recipes);
	const savedCalendarMonthRecords = await getAllRecordsFromStore(DATABASE_STORES.calendarMonths);
	const savedShoppingListRecords = await getAllRecordsFromStore(DATABASE_STORES.shoppingLists);
	const savedPantryItemRecords = await getAllRecordsFromStore(DATABASE_STORES.pantryItems);

  const backupData = {
    appTitle: APP_TITLE,
    appVersion: APP_VERSION,
    backupType: "full-database",
    createdAt: new Date().toISOString(),
    databaseName: DATABASE_NAME,
    databaseVersion: DATABASE_VERSION,
		data: {
			settings: savedSettingsRecords,
			recipes: savedRecipeRecords,
			calendarMonths: savedCalendarMonthRecords,
			shoppingLists: savedShoppingListRecords,
			pantryItems: savedPantryItemRecords
		}
  };

  const backupJson = JSON.stringify(backupData, null, 2);
  const backupBlob = new Blob([backupJson], {
    type: "application/json"
  });

  const downloadUrl = URL.createObjectURL(backupBlob);
  const downloadLink = document.createElement("a");

  downloadLink.href = downloadUrl;
  downloadLink.download = buildBackupFileName();

  document.body.appendChild(downloadLink);
  downloadLink.click();

  downloadLink.remove();
  URL.revokeObjectURL(downloadUrl);
	alert("Full backup exported successfully.");

}

function buildBackupFileName() {

  const now = new Date();

  const datePart = [
		now.getFullYear(),
		String(now.getMonth() + 1).padStart(2, "0"),
		String(now.getDate()).padStart(2, "0")
	].join("-");
  const timePart = [
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
    String(now.getSeconds()).padStart(2, "0")
  ].join("");

  return `TUMP_Backup_${datePart}_${timePart}.json`;

}

/* <------------------------------------------------
      ADMIN WIPE DATABASE SYSTEM
   -------------------------------------------------> */

function openWipeDatabaseDialog() {
  if (DOM.wipeDatabasePhraseInput) {
    DOM.wipeDatabasePhraseInput.value = "";
  }

  openDialog(DOM.wipeDatabaseDialog);
}

function closeWipeDatabaseDialog() {
  if (DOM.wipeDatabaseDialog) {
    DOM.wipeDatabaseDialog.close();
  }

  openDialog(DOM.adminDialog);
}

function handleWipeDatabasePhraseSubmit(event) {
  event.preventDefault();

  const enteredPhrase = DOM.wipeDatabasePhraseInput?.value.trim() || "";

  if (enteredPhrase !== "CLEAR THE DATABASE") {
    alert("The phrase did not match. Database wipe was cancelled.");
    return;
  }

  if (DOM.wipeDatabaseDialog) {
    DOM.wipeDatabaseDialog.close();
  }

  openDialog(DOM.wipeDatabaseFinalDialog);
}

function returnToAdminFromFinalWipeWarning() {
  if (DOM.wipeDatabaseFinalDialog) {
    DOM.wipeDatabaseFinalDialog.close();
  }

  openDialog(DOM.adminDialog);
}

async function wipeEntireDatabase() {
  if (DOM.wipeDatabaseFinalDialog) {
    DOM.wipeDatabaseFinalDialog.close();
  }

  if (appState.db) {
    appState.db.close();
    appState.db = null;
  }

  await new Promise((resolve, reject) => {
    const deleteRequest = indexedDB.deleteDatabase(DATABASE_NAME);

    deleteRequest.onsuccess = () => {
      resolve();
    };

    deleteRequest.onerror = () => {
      reject(deleteRequest.error);
    };

    deleteRequest.onblocked = () => {
      alert("Database wipe is blocked. Close other tabs using this app, then try again.");
      resolve();
    };
  });

  appState.settings = { ...DEFAULT_SETTINGS };
  appState.calendarMonthsBySlot = {};
  appState.recipes = [];
  appState.shoppingLists = [];

  appState.db = await openAppDatabase();

  applySettingsToScreen();
  applyInitialDateValues();
  renderRecipeBoxList();

  alert("Database erased. The app has been returned to a clean first-use state.");
}

/* <------------------------------------------------
      RECIPE FILTERING SYSTEM
   -------------------------------------------------> */

function getRecipesForCategory(categoryName) {
  if (!MEAL_CATEGORIES.includes(categoryName)) {
    return [];
  }

  return appState.recipes.filter((recipe) => {
    return Array.isArray(recipe.categories) && recipe.categories.includes(categoryName);
  });
}

function getRecipesForActiveCategories() {
  const activeCategories = getActiveMealCategories();

  return appState.recipes.filter((recipe) => {
    return recipe.categories.some((categoryName) => activeCategories.includes(categoryName));
  });
}

/* <------------------------------------------------
      LEFT RECIPE ASSIGNMENT PANEL SYSTEM
   -------------------------------------------------> */

function toggleAssignmentFilters() {
  if (!DOM.assignmentFilterOptions || !DOM.assignmentFilterToggleButton) {
    return;
  }

  const isCollapsed =
    DOM.assignmentFilterOptions.classList.toggle("collapsed");

  DOM.assignmentFilterToggleButton.textContent = isCollapsed ? "▲" : "▼";
  DOM.assignmentFilterToggleButton.setAttribute(
    "aria-label",
    isCollapsed ? "Expand recipe filters" : "Collapse recipe filters"
  );
}

function openAssignmentPanelForDay(dayNumber) {
  appState.selectedAssignmentDay = dayNumber;

  renderAssignmentRecipeList();

  if (DOM.assignmentPanel) {
    DOM.assignmentPanel.classList.add("open");
  }

  document.body.classList.add("assignment-panel-open");
}

function closeAssignmentPanel() {
  appState.selectedAssignmentDay = null;

  clearSelectedTouchRecipe();

  if (DOM.assignmentPanel) {
    DOM.assignmentPanel.classList.remove("open");
  }

  document.body.classList.remove("assignment-panel-open");
}

function getAssignmentFilterCategories() {
  const selectedCategories = DOM.assignmentFilterCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  return selectedCategories.length > 0
    ? selectedCategories
    : [...MEAL_CATEGORIES];
}

function getAssignmentFilteredRecipes() {
  const selectedCategories = getAssignmentFilterCategories();

  return appState.recipes.filter((recipe) => {
    return recipe.categories.some((categoryName) => selectedCategories.includes(categoryName));
  });
}

function renderAssignmentRecipeList() {
  if (!DOM.assignmentRecipeList) {
    return;
  }

  DOM.assignmentRecipeList.innerHTML = "";

  const filteredRecipes = getAssignmentFilteredRecipes();

  if (filteredRecipes.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "panel-note";
    emptyMessage.textContent = "No recipes match these filters.";
    DOM.assignmentRecipeList.appendChild(emptyMessage);
    return;
  }

  filteredRecipes.forEach((recipe) => {
    const recipeItem = document.createElement("div");
    recipeItem.className = "assignment-recipe-item";
    recipeItem.textContent = recipe.title;
		recipeItem.draggable = true;
		recipeItem.dataset.recipeId = recipe.id;

		recipeItem.addEventListener("click", () => {
			selectTouchRecipe(recipe.id, recipeItem);
		});

		recipeItem.addEventListener("dragstart", (event) => {
			recipeItem.classList.add("dragging-sidebar-recipe");

			event.dataTransfer.setData("text/plain", recipe.id);
		});

		recipeItem.addEventListener("dragend", () => {
			recipeItem.classList.remove("dragging-sidebar-recipe");
		});

		DOM.assignmentRecipeList.appendChild(recipeItem);
  });
}

/* <------------------------------------------------
      TABLET TOUCH ASSIGNMENT MODE
   -------------------------------------------------> */

function isTouchAssignmentMode() {

  return window.matchMedia("(hover: none) and (pointer: coarse)").matches;

}

function clearSelectedTouchRecipe() {

  appState.selectedTouchRecipeId = null;

  document
    .querySelectorAll(".assignment-recipe-item.touch-selected-recipe")
    .forEach((recipeItem) => {
      recipeItem.classList.remove("touch-selected-recipe");
    });

}

function selectTouchRecipe(recipeId, recipeItemElement) {

  if (!isTouchAssignmentMode()) {
    return;
  }

  clearSelectedTouchRecipe();

  appState.selectedTouchRecipeId = recipeId;

  recipeItemElement.classList.add("touch-selected-recipe");

}

async function assignSelectedTouchRecipeToDay(dayNumber) {

  if (!isTouchAssignmentMode()) {
    return false;
  }

  if (!appState.selectedTouchRecipeId) {
    return false;
  }

  await assignRecipeToCalendarDay(
    dayNumber,
    appState.selectedTouchRecipeId
  );

  clearSelectedTouchRecipe();

  return true;

}

/* <------------------------------------------------
      MONTH COPY PASTE SYSTEM
   -------------------------------------------------> */

function openCopyMonthDialog() {

  updateCalendarDateEngine();

  if (DOM.copyMonthSourceText) {
    DOM.copyMonthSourceText.textContent =
      `Copy ${getMonthName(appState.calendar.activeMonthIndex)} ${appState.calendar.activeYear} to another month.`;
  }

  if (DOM.copyMonthTargetMonthSelect) {
    const nextMonthIndex =
      appState.calendar.activeMonthIndex === 11
        ? 0
        : appState.calendar.activeMonthIndex + 1;

    DOM.copyMonthTargetMonthSelect.value =
      String(nextMonthIndex);
  }

  if (DOM.copyMonthTargetYearInput) {
    const targetYear =
      appState.calendar.activeMonthIndex === 11
        ? appState.calendar.activeYear + 1
        : appState.calendar.activeYear;

    DOM.copyMonthTargetYearInput.value =
      String(targetYear);
  }

  openDialog(DOM.copyMonthDialog);

}

function closeCopyMonthDialog() {

  if (DOM.copyMonthDialog) {
    DOM.copyMonthDialog.close();
  }

}

async function copyCurrentMonthToTargetMonth(event) {

  event.preventDefault();

  updateCalendarDateEngine();

  const sourceMonthData =
    structuredClone(getCurrentMonthWorkingData());

  const targetMonthIndex =
    Number(DOM.copyMonthTargetMonthSelect?.value);

  const targetYear =
    Number(DOM.copyMonthTargetYearInput?.value);

  if (
    !Number.isInteger(targetMonthIndex) ||
    targetMonthIndex < 0 ||
    targetMonthIndex > 11 ||
    !Number.isInteger(targetYear) ||
    targetYear < 1900 ||
    targetYear > 2200
  ) {
    alert("Choose a valid target month and year.");
    return;
  }

  if (
    targetMonthIndex === appState.calendar.activeMonthIndex &&
    targetYear === appState.calendar.activeYear
  ) {
    alert("Choose a different target month.");
    return;
  }

  const confirmed = confirm(
    `Paste ${getMonthName(appState.calendar.activeMonthIndex)} ${appState.calendar.activeYear} into ${getMonthName(targetMonthIndex)} ${targetYear}?\n\nThis will replace any meals already saved in the target month.`
  );

  if (!confirmed) {
    return;
  }

  const targetSlotKey =
    buildMonthSlotKey(targetYear, targetMonthIndex);

  const targetMonthData = {
    ...sourceMonthData,
    slotKey: targetSlotKey,
    monthIndex: targetMonthIndex,
    year: targetYear,
    calendarName: sourceMonthData.calendarName || appState.settings.calendarName,
    enabledCategories: Array.isArray(sourceMonthData.enabledCategories)
      ? [...sourceMonthData.enabledCategories]
      : getActiveMealCategories(),
    days: structuredClone(sourceMonthData.days || {}),
    updatedAt: new Date().toISOString()
  };

  appState.calendarMonthsBySlot[targetSlotKey] =
    targetMonthData;

  const wasSaved =
    await saveCalendarMonthToDatabase(targetMonthData);

  if (!wasSaved) {
    alert("The copied month could not be saved.");
    return;
  }

  closeCopyMonthDialog();

  showAutoSaveToast();

  alert(
    `${getMonthName(appState.calendar.activeMonthIndex)} ${appState.calendar.activeYear} was copied to ${getMonthName(targetMonthIndex)} ${targetYear}.`
  );

}

/* <------------------------------------------------
      RANDOMIZE CALENDAR SYSTEM
   -------------------------------------------------> */

async function clearCurrentCalendarMonth() {
  const confirmed = confirm("Clear all recipes from this calendar month?");

  if (!confirmed) {
    return;
  }

  const monthData = getCurrentMonthWorkingData();

  monthData.days = {};
  monthData.calendarName = appState.settings.calendarName;
  monthData.enabledCategories = getActiveMealCategories();
  monthData.updatedAt = new Date().toISOString();

  appState.calendarMonthsBySlot[monthData.slotKey] = monthData;

  const wasSaved = await saveCalendarMonthToDatabase(monthData);

  renderCalendarGrid();

  if (wasSaved) {
    showAutoSaveToast();
  } else {
    alert("The calendar could not be auto-saved after clearing.");
  }
}

function openRandomizeDialog() {
  updateRandomizeVarianceDescription();

  if (DOM.randomizeDialog) {
    openDialog(DOM.randomizeDialog);
  }
}

/* <------------------------------------------------
      RANDOMIZER VARIANCE CONTROL SYSTEM
   -------------------------------------------------> */

function getRandomizeRepeatSpacingDays() {

  const sliderValue =
    Number(DOM.randomizeVarianceSlider?.value || 1);

  const spacingMap = {
    1: 7,
    2: 14,
    3: 21,
    4: 32
  };

  return spacingMap[sliderValue] || 7;

}

function updateRandomizeVarianceDescription() {

  if (!DOM.randomizeVarianceDescription) {
    return;
  }

  const repeatSpacingDays =
    getRandomizeRepeatSpacingDays();

  if (repeatSpacingDays === 32) {
    DOM.randomizeVarianceDescription.textContent =
      "The same meal will only be used once per month.";
    return;
  }

  DOM.randomizeVarianceDescription.textContent =
    `The same meal will not repeat within ${repeatSpacingDays} days.`;

}

function closeRandomizeDialog() {
  if (DOM.randomizeDialog) {
    DOM.randomizeDialog.close();
  }
}

async function handleRandomizeCalendar(event) {
  event.preventDefault();

  const selectedCategories = DOM.randomizeCategoryCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  if (selectedCategories.length === 0) {
    alert("Please select at least one category.");
    return;
  }

  const recipesByCategory = {};

  selectedCategories.forEach((categoryName) => {
    recipesByCategory[categoryName] = appState.recipes.filter((recipe) => {
      return recipe.categories.includes(categoryName);
    });
  });

  const missingCategory = selectedCategories.find((categoryName) => {
    return recipesByCategory[categoryName].length === 0;
  });

  if (missingCategory) {
    alert(`No recipes were found for ${missingCategory}.`);
    return;
  }

  const monthData = getCurrentMonthWorkingData();
  const repeatSpacingDays = getRandomizeRepeatSpacingDays();
  const usedDaysByRecipe = {};
  const useCountByRecipe = {};

  let blankSpaceWasNeeded = false;

  monthData.days = {};

  const shuffleList = (list) => {
    return [...list].sort(() => Math.random() - 0.5);
  };

  const dayNumbers = Array.from(
    { length: appState.calendar.daysInMonth },
    (unusedValue, index) => index + 1
  );

  const categoryOrderByDay = {};

  dayNumbers.forEach((dayNumber) => {
    categoryOrderByDay[dayNumber] =
      shuffleList(selectedCategories);
  });

  for (let categoryPassIndex = 0; categoryPassIndex < selectedCategories.length; categoryPassIndex += 1) {
    const shuffledDays = shuffleList(dayNumbers);

    shuffledDays.forEach((dayNumber) => {
      const categoryName =
        categoryOrderByDay[dayNumber][categoryPassIndex];

      const categoryRecipes =
        recipesByCategory[categoryName];

      const dayKey =
        String(dayNumber);

      const existingMeals =
        monthData.days[dayKey]?.meals || {};

      const usedRecipeIdsToday =
        new Set(Object.values(existingMeals));

      const availableRecipes = categoryRecipes.filter((recipe) => {
        const usedDays =
          usedDaysByRecipe[recipe.id] || [];

        const isAllowedBySpacing =
          usedDays.every((usedDayNumber) => {
            return Math.abs(dayNumber - usedDayNumber) >= repeatSpacingDays;
          });

        const isNotAlreadyUsedToday =
          !usedRecipeIdsToday.has(recipe.id);

        return isAllowedBySpacing && isNotAlreadyUsedToday;
      });

      if (availableRecipes.length === 0) {
        blankSpaceWasNeeded = true;
        return;
      }

      const lowestUseCount =
        Math.min(
          ...availableRecipes.map((recipe) => {
            return useCountByRecipe[recipe.id] || 0;
          })
        );

      const leastUsedAvailableRecipes =
        availableRecipes.filter((recipe) => {
          return (useCountByRecipe[recipe.id] || 0) === lowestUseCount;
        });

      const randomRecipe =
        leastUsedAvailableRecipes[
          Math.floor(Math.random() * leastUsedAvailableRecipes.length)
        ];

      if (!monthData.days[dayKey]) {
        monthData.days[dayKey] = {
          meals: {}
        };
      }

      monthData.days[dayKey].meals[categoryName] =
        randomRecipe.id;

      if (!usedDaysByRecipe[randomRecipe.id]) {
        usedDaysByRecipe[randomRecipe.id] = [];
      }

      usedDaysByRecipe[randomRecipe.id].push(dayNumber);

      useCountByRecipe[randomRecipe.id] =
        (useCountByRecipe[randomRecipe.id] || 0) + 1;
    });
  }

  monthData.calendarName = appState.settings.calendarName;
  monthData.enabledCategories = getActiveMealCategories();
  monthData.updatedAt = new Date().toISOString();

  appState.calendarMonthsBySlot[monthData.slotKey] = monthData;

  const wasSaved = await saveCalendarMonthToDatabase(monthData);

  renderCalendarGrid();
  closeRandomizeDialog();

  if (wasSaved) {
    showAutoSaveToast();
  } else {
    alert("The randomized calendar could not be auto-saved.");
    return;
  }

  if (blankSpaceWasNeeded) {
    alert(
      "There are not enough meals in your Recipe Box to fill every selected meal slot using the repeat spacing you selected.\n\nSome slots were left blank.\n\nYou can fill the empty spaces manually, re-randomize with a different spacing setting, or add more meals to the Recipe Box/categories you selected."
    );
  }
}

/* <------------------------------------------------
      SINGLE RECIPE IMPORT SYSTEM
   -------------------------------------------------> */

function openSingleRecipeImportFilePicker() {

  if (!DOM.importRecipeFileInput) {
    return;
  }

  DOM.importRecipeFileInput.value = "";
  DOM.importRecipeFileInput.click();

}

async function handleSingleRecipeImportFileSelection() {

  const selectedFile = DOM.importRecipeFileInput?.files?.[0];

  if (!selectedFile) {
    return;
  }

  try {
    const recipeText = await selectedFile.text();
    const recipeImportData = JSON.parse(recipeText);

    validateSingleRecipeImportData(recipeImportData);

		const wasImported = await importSingleRecipe(recipeImportData.recipe);

		if (wasImported) {
			alert("Recipe imported successfully.");
		}
		
		} catch (error) {
    console.warn("Single recipe import failed validation.", error);
    alert("This does not appear to be a valid Ultimate Meal Planner recipe file.");
  }

}

function validateSingleRecipeImportData(recipeImportData) {

  if (!recipeImportData || typeof recipeImportData !== "object") {
    throw new Error("Recipe import data is missing or invalid.");
  }

  if (recipeImportData.exportType !== "single-recipe") {
    throw new Error("Recipe import type is not supported.");
  }

  if (!recipeImportData.recipe || typeof recipeImportData.recipe !== "object") {
    throw new Error("Recipe data is missing.");
  }

  if (!recipeImportData.recipe.title || typeof recipeImportData.recipe.title !== "string") {
    throw new Error("Recipe title is missing.");
  }

  if (!Array.isArray(recipeImportData.recipe.categories)) {
    throw new Error("Recipe categories are missing.");
  }

}

async function importSingleRecipe(importedRecipe) {

/* <------------------------------------------------
      SINGLE RECIPE DUPLICATE CHECK
   -------------------------------------------------> */

const matchingRecipe = appState.recipes.find((recipe) => {

  return (
    recipe.title?.trim().toLowerCase() ===
    importedRecipe.title?.trim().toLowerCase()
  );

});

if (matchingRecipe) {

  const confirmed = confirm(
    `A recipe named "${importedRecipe.title}" already exists.\n\nImport another copy anyway?`
  );

  if (!confirmed) {
    return false;
  }

}

  const recipeToSave = {
    ...importedRecipe,
    id: crypto.randomUUID(),
    title: importedRecipe.title,
    categories: sanitizeRecipeCategories(importedRecipe.categories),
    createdAt: new Date().toISOString()
  };

  const savedRecipe = await saveRecipeToDatabase(recipeToSave);

  if (!savedRecipe) {
    throw new Error("Imported recipe could not be saved.");
  }

  appState.recipes.push(savedRecipe);

  sortRecipesByTitle();
  renderRecipeBoxList();
  renderAssignmentRecipeList();

	return true;

}

/* <------------------------------------------------
      CONVERSION CHART WINDOW SYSTEM
   -------------------------------------------------> */

function closeConversionChartDialog() {

  if (!DOM.conversionChartDialog) {
    return;
  }

  DOM.conversionChartDialog.close();

}

function renderConversionChart() {

  if (!DOM.conversionChartBody) {
    return;
  }

  DOM.conversionChartBody.innerHTML = "";

  const conversionSections = [
    {
      title: "Teaspoons / Tablespoons",
      rows: [
        "3 tsp = 1 tbsp",
        "1 tbsp = 3 tsp",
        "4 tbsp = 1/4 cup",
        "8 tbsp = 1/2 cup",
        "16 tbsp = 1 cup"
      ]
    },
    {
      title: "Cups / Pints / Quarts / Gallons",
      rows: [
        "2 cups = 1 pint",
        "4 cups = 1 quart",
        "4 quarts = 1 gallon",
        "16 cups = 1 gallon"
      ]
    },
    {
      title: "Ounces / Pounds",
      rows: [
        "16 oz = 1 lb",
        "8 oz = 1/2 lb",
        "4 oz = 1/4 lb"
      ]
    },
    {
      title: "Common Kitchen Notes",
      rows: [
        "1 stick butter = 1/2 cup",
        "1 stick butter = 8 tbsp",
        "1 cup = 16 tbsp",
        "1/2 cup = 8 tbsp",
        "1/4 cup = 4 tbsp"
      ]
    }
  ];

  conversionSections.forEach((section) => {

    const sectionElement =
      document.createElement("section");

    sectionElement.className = "conversion-chart-section";

    const sectionTitle =
      document.createElement("h3");

    sectionTitle.textContent = section.title;

    const rowList =
      document.createElement("ul");

    rowList.className = "conversion-chart-list";

    section.rows.forEach((rowText) => {

      const rowItem =
        document.createElement("li");

      rowItem.textContent = rowText;

      rowList.appendChild(rowItem);

    });

    sectionElement.appendChild(sectionTitle);
    sectionElement.appendChild(rowList);

    DOM.conversionChartBody.appendChild(sectionElement);

  });

}

/* <------------------------------------------------
      PANTRY WINDOW SYSTEM
   -------------------------------------------------> */

function closePantryDialog() {

  if (!DOM.pantryDialog) {
    return;
  }

  DOM.pantryDialog.close();

}

function renderPantryItemList() {

  if (!DOM.pantryItemList) {
    return;
  }

  DOM.pantryItemList.innerHTML = "";

  const sortedPantryItems =
    [...appState.pantryItems].sort((a, b) => {

      return a.name.localeCompare(
        b.name,
        undefined,
        {
          sensitivity: "base"
        }
      );

    });

  sortedPantryItems.forEach((pantryItem) => {

    const pantryRow =
      document.createElement("div");

    pantryRow.className = "pantry-item-row";
		
		    pantryRow.draggable = true;
    pantryRow.dataset.pantryItemId = pantryItem.id;

    pantryRow.addEventListener("dragstart", (event) => {

      pantryRow.classList.add("dragging-pantry-item");

      event.dataTransfer.setData(
        "application/x-pantry-item",
        pantryItem.id
      );

    });

    pantryRow.addEventListener("dragend", () => {

      pantryRow.classList.remove("dragging-pantry-item");

    });

    const pantryLabel =
      document.createElement("label");

    pantryLabel.className = "pantry-item-label";

    const pantryCheckbox =
      document.createElement("input");

    pantryCheckbox.type = "checkbox";
    pantryCheckbox.checked = Boolean(pantryItem.checked);

    pantryCheckbox.addEventListener("change", async () => {

      pantryItem.checked = pantryCheckbox.checked;

      await savePantryItemToDatabase(
        pantryItem
      );

      await regenerateCurrentShoppingListIfSaved();

    });

    const pantryName =
      document.createElement("span");

    pantryName.textContent = pantryItem.name;

    pantryLabel.appendChild(pantryCheckbox);
    pantryLabel.appendChild(pantryName);

    pantryRow.appendChild(pantryLabel);

    DOM.pantryItemList.appendChild(pantryRow);

  });

}

/* <------------------------------------------------
      PANTRY SHOPPING LIST AUTO UPDATE SYSTEM
   -------------------------------------------------> */

async function regenerateCurrentShoppingListIfSaved() {

  const currentShoppingList =
    appState.shoppingLists.find((shoppingList) => {
      return shoppingList.id === getCurrentShoppingListId();
    });

  if (!currentShoppingList) {
    return;
  }

  await generateShoppingListFromCalendar();

}

/* <------------------------------------------------
      PANTRY DELETE ITEM SYSTEM
   -------------------------------------------------> */

async function deletePantryItem(pantryItemId) {

  const pantryItem =
    appState.pantryItems.find((item) => {
      return item.id === pantryItemId;
    });

  if (!pantryItem) {
    return;
  }

  const confirmed = confirm(
    `Remove "${pantryItem.name}" from Pantry?`
  );

  if (!confirmed) {
    return;
  }

  appState.pantryItems =
    appState.pantryItems.filter((item) => {
      return item.id !== pantryItemId;
    });

  await deletePantryItemFromDatabase(
    pantryItemId
  );

    renderPantryItemList();

  await regenerateCurrentShoppingListIfSaved();

}

/* <------------------------------------------------
      PANTRY ADD ITEM SYSTEM
   -------------------------------------------------> */

async function addPantryItemFromInput() {

  if (!DOM.pantryItemInput) {
    return;
  }

  const pantryItemName =
    formatPantryDisplayName(
      DOM.pantryItemInput.value
    );

  if (!pantryItemName) {
    alert("Enter a pantry item name first.");
    return;
  }

  const duplicateItem =
    appState.pantryItems.find((pantryItem) => {

      return normalizePantryTerm(pantryItem.name) ===
        normalizePantryTerm(pantryItemName);

    });

  if (duplicateItem) {
    alert("That pantry item already exists.");
    return;
  }
	
	  const moreSpecificMatchingItem =
    appState.pantryItems.find((pantryItem) => {

      const existingName =
        normalizePantryTerm(pantryItem.name);

      const newName =
        normalizePantryTerm(pantryItemName);

      return existingName !== newName &&
        existingName.endsWith(` ${newName}`);

    });

  if (moreSpecificMatchingItem) {
    alert(
      `"${pantryItemName}" may be too general.\n\n"${moreSpecificMatchingItem.name}" already exists in your Pantry.\n\nPlease be more specific with this entry.`
    );
    return;
  }

  const newPantryItem = {
    id: `pantry-${crypto.randomUUID()}`,
    name: pantryItemName,
    checked: false
  };

  const savedPantryItem =
    await savePantryItemToDatabase(newPantryItem);

  if (!savedPantryItem) {
    alert("Pantry item could not be saved.");
    return;
  }

  appState.pantryItems.push(savedPantryItem);

  DOM.pantryItemInput.value = "";

    renderPantryItemList();

  await regenerateCurrentShoppingListIfSaved();

}

/* <------------------------------------------------
      SHOPPING LIST WINDOW SYSTEM
   -------------------------------------------------> */

function closeShoppingListDialog() {

  if (!DOM.shoppingListDialog) {
    return;
  }

  DOM.shoppingListDialog.close();

}

/* <------------------------------------------------
      SHOPPING LIST LOAD SYSTEM
   -------------------------------------------------> */

function loadCurrentShoppingListDisplay() {

  const savedShoppingList = appState.shoppingLists.find((shoppingList) => {
    return shoppingList.id === getCurrentShoppingListId();
  });

  if (!savedShoppingList || !Array.isArray(savedShoppingList.items)) {
    clearShoppingListDisplay();
    return;
  }

  renderShoppingListItems(savedShoppingList.items);

}

/* <------------------------------------------------
      SHOPPING INGREDIENT NORMALIZATION SYSTEM
   -------------------------------------------------> */

function normalizeShoppingIngredientText(ingredientText) {

	let normalizedText =
		String(ingredientText || "")
			.trim()
			.replace(/[.,;:!?]+$/g, "")
			.replace(/\s+/g, " ")
			.replace(/\bof\b/gi, "")
			.replace(/\s+/g, " ")
			.trim();

	normalizedText = normalizeShoppingUnits(
		normalizedText
	);
	
	normalizedText =
		fixShoppingNonNumericPluralization(
			normalizedText
		);

  const plainWaterPattern =
    /^(?:(?:\d+(?:\.\d+)?|\d+\/\d+|several|some|a|an)\s+)?(?:(?:cups?|tbsp|tablespoons?|tsp|teaspoons?|oz|ounces?|lb|lbs|pounds?|quarts?|gallons?)\s+)?water$/i;

  if (plainWaterPattern.test(normalizedText)) {
    return "";
  }

  return normalizedText;

}

function normalizeShoppingUnits(ingredientText) {

  return ingredientText
    .replace(/\bteaspoons?\b/gi, "tsp")
    .replace(/\btablespoons?\b/gi, "tbsp")
    .replace(/\bcups\b/gi, "cups")
		.replace(/\bcup\b/gi, "cup")
    .replace(/\bpounds?\b/gi, "lb")
    .replace(/\blbs\b/gi, "lb")
    .replace(/\bounces?\b/gi, "oz")
    .replace(/\bquarts?\b/gi, "quart")
    .replace(/\bgallons?\b/gi, "gallon")
    .replace(/\s+/g, " ")
    .trim();

}

/* <------------------------------------------------
      PANTRY NORMALIZATION HELPERS
   -------------------------------------------------> */

function formatPantryDisplayName(text) {

  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (letter) => {
      return letter.toUpperCase();
    });

}

function normalizePantryTerm(text) {

  return String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[.,;:!?]+$/g, "")
    .replace(/\s+/g, " ");

}

function ingredientMatchesPantryItem(
  ingredientText,
  pantryItemName
) {

  const normalizedIngredient =
    normalizePantryTerm(
      ingredientText
    );

  const normalizedPantryName =
    normalizePantryTerm(
      pantryItemName
    );

  const escapedPantryName =
    normalizedPantryName.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

  const pantryWordPattern =
    new RegExp(
      `\\b${escapedPantryName}\\b`,
      "i"
    );

  return pantryWordPattern.test(
    normalizedIngredient
  );

}

function fixShoppingNonNumericPluralization(ingredientText) {

  const vagueAmountPattern =
    /^(several|some|a few|a handful|a pinch|a touch)\s+(tsp|tbsp|cup|oz|lb|quart|gallon)\b/i;

  return ingredientText.replace(
    vagueAmountPattern,
    (match, amountWord, unit) => {

      const normalizedAmountWord =
        amountWord
          .toLowerCase()
          .replace(/\b\w/g, (letter) => {
            return letter.toUpperCase();
          });

      const displayUnit =
        pluralizeShoppingUnit(unit.toLowerCase());

      return `${normalizedAmountWord} ${displayUnit}`;

    }
  );

}

function parseShoppingIngredient(ingredientText) {

  const amountUnitPattern =
    /^(\d+(?:\.\d+)?|\d+\/\d+)\s+(tsp|tbsp|cup|oz|lb|quart|gallon)\s+(.+)$/i;

  const match =
    ingredientText.match(amountUnitPattern);

  if (!match) {
    return {
      key: ingredientText.toLowerCase(),
      label: ingredientText,
      amount: null,
      unit: "",
      itemName: ingredientText,
      count: 1
    };
  }

  const amount =
    parseShoppingAmount(match[1]);

  const unit =
    match[2].toLowerCase();

  const itemName =
    match[3].trim();

  return {
    key: `${unit}|${itemName.toLowerCase()}`,
    label: ingredientText,
    amount,
    unit,
    itemName,
    count: 1
  };

}

function parseShoppingAmount(amountText) {

  if (amountText.includes("/")) {
    const [numerator, denominator] =
      amountText.split("/").map(Number);

    if (denominator) {
      return numerator / denominator;
    }
  }

  return Number(amountText);

}

function combineShoppingIngredients(existingIngredient, parsedIngredient) {

  if (!existingIngredient) {
    return parsedIngredient;
  }

  if (
    existingIngredient.amount !== null &&
    parsedIngredient.amount !== null &&
    existingIngredient.unit === parsedIngredient.unit &&
    existingIngredient.itemName.toLowerCase() === parsedIngredient.itemName.toLowerCase()
  ) {

    const combinedAmount =
      existingIngredient.amount + parsedIngredient.amount;

    return {
      ...existingIngredient,
      amount: combinedAmount,
      label: formatShoppingAmountLabel(
        combinedAmount,
        existingIngredient.unit,
        existingIngredient.itemName
      ),
      count: existingIngredient.count + 1
    };

  }

  return {
    ...existingIngredient,
    count: existingIngredient.count + 1
  };

}

/* <------------------------------------------------
      PANTRY SHOPPING RULE SYSTEM
   -------------------------------------------------> */

function applyPantryRulesToIngredient(
  ingredientLabel
) {

  for (const pantryItem of appState.pantryItems) {

    if (
      !ingredientMatchesPantryItem(
        ingredientLabel,
        pantryItem.name
      )
    ) {
      continue;
    }

    if (pantryItem.checked) {
      return null;
    }

    return pantryItem.name;

  }

  return ingredientLabel;

}

/* <------------------------------------------------
      SHOPPING LIST UNIT ROLLUP SYSTEM
   -------------------------------------------------> */

function rollupShoppingMeasurement(amount, unit) {

  const rollupRules = {
    tsp: {
      threshold: 3,
      nextUnit: "tbsp"
    },
    tbsp: {
      threshold: 16,
      nextUnit: "cup"
    },
    cup: {
      threshold: 4,
      nextUnit: "quart"
    },
    quart: {
      threshold: 4,
      nextUnit: "gallon"
    },
    oz: {
      threshold: 16,
      nextUnit: "lb"
    }
  };

  let rolledAmount = amount;
  let rolledUnit = unit;

  while (
    rollupRules[rolledUnit] &&
    rolledAmount >= rollupRules[rolledUnit].threshold
  ) {

    const rollupRule =
      rollupRules[rolledUnit];

    rolledAmount =
      rolledAmount / rollupRule.threshold;

    rolledUnit =
      rollupRule.nextUnit;

  }

  return {
    amount: rolledAmount,
    unit: rolledUnit
  };

}

function formatShoppingAmountLabel(amount, unit, itemName) {

	const rolledMeasurement =
		rollupShoppingMeasurement(
			amount,
			unit
		);

	const formattedAmount =
		Number.isInteger(rolledMeasurement.amount)
			? String(rolledMeasurement.amount)
			: String(Number(rolledMeasurement.amount.toFixed(2)));

	const displayUnit =
		rolledMeasurement.amount === 1
			? rolledMeasurement.unit
			: pluralizeShoppingUnit(rolledMeasurement.unit);

	return `${formattedAmount} ${displayUnit} ${itemName}`;

}

function pluralizeShoppingUnit(unit) {

  const pluralUnits = {
    tsp: "tsp",
    tbsp: "tbsp",
    cup: "cups",
    oz: "oz",
    lb: "lbs",
    quart: "quarts",
    gallon: "gallons"
  };

  return pluralUnits[unit] || unit;

}

/* <------------------------------------------------
      SHOPPING LIST GENERATION SYSTEM
   -------------------------------------------------> */

async function generateShoppingListFromCalendar() {

  const monthData = getCurrentMonthWorkingData();
  const ingredientMap = new Map();

  for (let dayNumber = 1; dayNumber <= appState.calendar.daysInMonth; dayNumber += 1) {
    const dayKey = String(dayNumber);
    const meals = getDayMealSlots(monthData.days?.[dayKey]);

    Object.values(meals).forEach((recipeId) => {
      const recipe = getRecipeById(recipeId);

      if (!recipe || !Array.isArray(recipe.ingredients)) {
        return;
      }

      recipe.ingredients.forEach((ingredientText) => {
				const cleanIngredient =
					normalizeShoppingIngredientText(
						ingredientText
					);

				if (!cleanIngredient) {
					return;
				}

				const parsedIngredient =
					parseShoppingIngredient(cleanIngredient);

				const normalizedIngredient =
					parsedIngredient.key;

				const existingIngredient =
					ingredientMap.get(normalizedIngredient);

				ingredientMap.set(
					normalizedIngredient,
					combineShoppingIngredients(
						existingIngredient,
						parsedIngredient
					)
				);
				
				const pantryAdjustedLabel =
					applyPantryRulesToIngredient(
						ingredientMap
							.get(normalizedIngredient)
							.label
					);

				if (pantryAdjustedLabel === null) {
					ingredientMap.delete(
						normalizedIngredient
					);
					return;
				}

				ingredientMap.get(
					normalizedIngredient
				).label = pantryAdjustedLabel;

      });
    });
  }

const sortedShoppingItems =
  Array
    .from(ingredientMap.values())
    .sort((a, b) => {

      return a.label.localeCompare(
        b.label,
        undefined,
        {
          sensitivity: "base"
        }
      );

    });

	await saveGeneratedShoppingList(
		sortedShoppingItems
	);

	loadCurrentShoppingListDisplay();

}

/* <------------------------------------------------
      SHOPPING LIST SAVE SYSTEM
   -------------------------------------------------> */

async function saveGeneratedShoppingList(shoppingItems) {

  const monthName = getMonthName(appState.calendar.activeMonthIndex);
  const year = appState.calendar.activeYear;

  const shoppingListRecord = {
    id: getCurrentShoppingListId(),
    title: `${monthName} ${year} Shopping List`,
    items: shoppingItems,
    monthIndex: appState.calendar.activeMonthIndex,
    year,
    updatedAt: new Date().toISOString()
  };

  const savedShoppingList =
    await saveShoppingListToDatabase(shoppingListRecord);

  if (!savedShoppingList) {
    alert("Shopping list could not be saved.");
    return;
  }

  const existingIndex = appState.shoppingLists.findIndex((shoppingList) => {
    return shoppingList.id === savedShoppingList.id;
  });

  if (existingIndex >= 0) {
    appState.shoppingLists[existingIndex] = savedShoppingList;
  } else {
    appState.shoppingLists.push(savedShoppingList);
  }

	return savedShoppingList;

}

function getCurrentShoppingListId() {

  return `shopping-list-${appState.calendar.activeYear}-${String(appState.calendar.activeMonthIndex + 1).padStart(2, "0")}`;

}

function renderShoppingListItems(shoppingItems) {

  if (!DOM.shoppingListItems) {
    return;
  }

  DOM.shoppingListItems.innerHTML = "";

  if (!shoppingItems.length) {
    const emptyMessage = document.createElement("p");

    emptyMessage.className = "panel-note";
    emptyMessage.textContent = "No shopping list has been generated yet.";

    DOM.shoppingListItems.appendChild(emptyMessage);
    return;
  }

  const itemList = document.createElement("ul");

  itemList.className = "shopping-list-item-list";

  shoppingItems.forEach((item) => {
    const listItem = document.createElement("li");

		listItem.textContent = item.label;

    itemList.appendChild(listItem);
  });

  DOM.shoppingListItems.appendChild(itemList);

}

/* <------------------------------------------------
      SHOPPING LIST SHARE SYSTEM
   -------------------------------------------------> */

async function shareShoppingList() {

  const currentShoppingList = appState.shoppingLists.find((shoppingList) => {
    return shoppingList.id === getCurrentShoppingListId();
  });

  if (!currentShoppingList || !Array.isArray(currentShoppingList.items) || currentShoppingList.items.length === 0) {
    alert("There is no shopping list to share.");
    return;
  }

  const shoppingListText =
    buildShoppingListShareText(currentShoppingList);

  if (navigator.share) {

    try {

      await navigator.share({
        title: currentShoppingList.title,
        text: shoppingListText
      });

      return;

    } catch (error) {

      console.warn(
        "Native shopping list share unavailable. Falling back to text download.",
        error
      );

    }

  }

  downloadShoppingListTextFile(
    currentShoppingList,
    shoppingListText
  );

  alert(
    "Native sharing is not supported on this device/browser.\n\nShopping list text file downloaded instead."
  );

}

function buildShoppingListShareText(shoppingList) {

	const lines = [
		shoppingList.title || "Shopping List",
		"",
		"Items:",
		""
	];

	shoppingList.items.forEach((item) => {

		lines.push(`• ${item.label}`);

	});

  return lines.join("\n");

}

function downloadShoppingListTextFile(shoppingList, shoppingListText) {

  const textBlob =
    new Blob(
      [shoppingListText],
      {
        type: "text/plain"
      }
    );

  const downloadUrl =
    URL.createObjectURL(textBlob);

  const downloadLink =
    document.createElement("a");

  downloadLink.href = downloadUrl;
  downloadLink.download =
    buildShoppingListTextFileName(shoppingList);

  document.body.appendChild(downloadLink);

  downloadLink.click();

  downloadLink.remove();

  URL.revokeObjectURL(downloadUrl);

}

function buildShoppingListTextFileName(shoppingList) {

  const safeTitle =
    (shoppingList.title || "Shopping_List")
      .replace(/[<>:"/\\|?*]+/g, "")
      .trim()
      .replace(/\s+/g, "_");

  return `TUMP_${safeTitle}.txt`;

}

/* <------------------------------------------------
      SHOPPING LIST PRINT SYSTEM
   -------------------------------------------------> */

function printShoppingList() {

  if (!DOM.shoppingListItems) {
    return;
  }

  document.body.classList.add("printing-shopping-list");

  window.print();

  window.setTimeout(() => {
    document.body.classList.remove("printing-shopping-list");
  }, 500);

}

/* <------------------------------------------------
      SHOPPING LIST CLEAR SYSTEM
   -------------------------------------------------> */

async function clearShoppingListDisplay() {

  const shoppingListId =
    getCurrentShoppingListId();

  const existingIndex =
    appState.shoppingLists.findIndex((shoppingList) => {

      return shoppingList.id === shoppingListId;

    });

  if (existingIndex >= 0) {

    appState.shoppingLists.splice(
      existingIndex,
      1
    );

  }

  await deleteShoppingListFromDatabase(
    shoppingListId
  );

  renderShoppingListItems([]);

}

/* <------------------------------------------------
      RECIPE BOX WINDOW SYSTEM
   -------------------------------------------------> */

function openRecipeBoxDialog() {
  renderRecipeBoxList();
  openDialog(DOM.recipeBoxDialog);
}

function closeRecipeBoxDialog() {
  if (!DOM.recipeBoxDialog) {
    return;
  }

  DOM.recipeBoxDialog.close();
}

function getRecipeBoxFilteredRecipes() {
  const selectedFilter = DOM.recipeBoxFilterSelect?.value || "ALL";

  if (selectedFilter === "ALL") {
    return [...appState.recipes];
  }

  return appState.recipes.filter((recipe) => {
    return Array.isArray(recipe.categories) && recipe.categories.includes(selectedFilter);
  });
}

function renderRecipeBoxList() {
  if (!DOM.recipeBoxList) {
    return;
  }

  DOM.recipeBoxList.innerHTML = "";

  const filteredRecipes = getRecipeBoxFilteredRecipes();

  if (filteredRecipes.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "panel-note";
    emptyMessage.textContent = "No recipes match this filter.";
    DOM.recipeBoxList.appendChild(emptyMessage);
    return;
  }

  filteredRecipes.forEach((recipe) => {
    const recipeCard = document.createElement("article");
    recipeCard.className = "recipe-card";

    const recipeTitle = document.createElement("h3");
    recipeTitle.textContent = recipe.title;

    const recipeCategories = document.createElement("p");
    recipeCategories.className = "recipe-category-text";
    recipe.categories.forEach((categoryName) => {
		const categoryLine = document.createElement("span");

		categoryLine.textContent = categoryName;

		recipeCategories.appendChild(categoryLine);
	});

    recipeCard.addEventListener("click", () => openRecipeViewDialog(recipe.id));

		recipeCard.appendChild(recipeTitle);
		recipeCard.appendChild(recipeCategories);

    DOM.recipeBoxList.appendChild(recipeCard);
  });
}

/* <------------------------------------------------
      RECIPE READ ONLY VIEW SYSTEM
   -------------------------------------------------> */

function openRecipeViewDialog(recipeId) {
  const recipe = getRecipeById(recipeId);

  if (!recipe) {
    return;
  }

  appState.viewedRecipeId = recipeId;

  if (DOM.recipeViewTitle) {
    DOM.recipeViewTitle.textContent = recipe.title;
  }

  if (DOM.recipeViewDescription) {
    DOM.recipeViewDescription.textContent =
      recipe.description || "No description has been added.";
  }

  if (DOM.recipeViewCategories) {
    DOM.recipeViewCategories.textContent = recipe.categories.join(", ");
  }

  updateRecipeViewTimeDisplay(recipe);

  if (DOM.recipeViewServings) {
    DOM.recipeViewServings.textContent =
      recipe.servings
        ? `Servings: ${recipe.servings}`
        : "";
  }

  if (DOM.recipeViewIngredients) {
    DOM.recipeViewIngredients.innerHTML = "";

    if (recipe.ingredients.length === 0) {
      DOM.recipeViewIngredients.textContent = "No ingredients have been added.";
    } else {
      const ingredientList = document.createElement("ul");

      recipe.ingredients.forEach((ingredient) => {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = ingredient;

        ingredientList.appendChild(ingredientItem);
      });

      DOM.recipeViewIngredients.appendChild(ingredientList);
    }
  }

  if (DOM.recipeViewInstructions) {
    DOM.recipeViewInstructions.textContent =
      recipe.instructions || "No instructions have been added.";
  }

  if (DOM.recipeViewNotes) {
    DOM.recipeViewNotes.textContent =
      recipe.notes || "No notes have been added.";
  }

  if (DOM.recipeViewNutrition) {
    DOM.recipeViewNutrition.textContent =
      recipe.nutrition || "No nutrition information has been added.";
  }

  if (DOM.recipeViewSource) {
    DOM.recipeViewSource.textContent =
      recipe.sourceUrl || "No source URL has been added.";
  }

  openDialog(DOM.recipeViewDialog);
}

/* <------------------------------------------------
      RECIPE VIEW TIME DISPLAY SYSTEM
   -------------------------------------------------> */

function updateRecipeViewTimeDisplay(recipe) {

  const hasTimeData =
    recipe.prepTime ||
    recipe.cookTime ||
    recipe.totalTime;

  if (DOM.recipeViewTimeRow) {
    DOM.recipeViewTimeRow.style.display =
      hasTimeData ? "grid" : "none";
  }

  if (DOM.recipeViewPrepTime) {
    DOM.recipeViewPrepTime.textContent =
      recipe.prepTime ? `${recipe.prepTime} min` : "—";
  }

  if (DOM.recipeViewCookTime) {
    DOM.recipeViewCookTime.textContent =
      recipe.cookTime ? `${recipe.cookTime} min` : "—";
  }

  if (DOM.recipeViewTotalTime) {
    DOM.recipeViewTotalTime.textContent =
      recipe.totalTime ? `${recipe.totalTime} min` : "—";
  }

}

function closeRecipeViewDialog() {
  appState.viewedRecipeId = null;

  if (DOM.recipeViewDialog) {
    DOM.recipeViewDialog.close();
  }
}

function editCurrentlyViewedRecipe() {
  const recipeId = appState.viewedRecipeId;

  if (!recipeId) {
    return;
  }

  if (DOM.recipeViewDialog) {
    DOM.recipeViewDialog.close();
  }

  openEditRecipeDialog(recipeId);
}

/* <------------------------------------------------
      DELETED RECIPE CALENDAR CLEANUP
   -------------------------------------------------> */

function removeDeletedRecipeFromCalendarMonths(recipeId) {
  Object.values(appState.calendarMonthsBySlot).forEach((monthData) => {
    Object.keys(monthData.days || {}).forEach((dayKey) => {
      const dayData = monthData.days[dayKey];

      if (dayData.meals) {
        Object.keys(dayData.meals).forEach((categoryName) => {
          if (dayData.meals[categoryName] === recipeId) {
            delete dayData.meals[categoryName];
          }
        });

        if (Object.keys(dayData.meals).length === 0) {
          delete monthData.days[dayKey];
        }
      }

      if (Array.isArray(dayData.recipeIds)) {
        dayData.recipeIds = dayData.recipeIds.filter((savedRecipeId) => {
          return savedRecipeId !== recipeId;
        });

        if (dayData.recipeIds.length === 0 && !dayData.meals) {
          delete monthData.days[dayKey];
        }
      }
    });
  });
}

/* <------------------------------------------------
      RECIPE UI SYSTEM
   -------------------------------------------------> */

function openNewRecipeDialog() {
  clearRecipeForm();

  if (DOM.recipeDialogTitle) {
    DOM.recipeDialogTitle.textContent = "Recipe Card - Add";
  }

  if (DOM.deleteRecipeButton) {
    DOM.deleteRecipeButton.style.display = "none";
  }

  openDialog(DOM.recipeDialog);
}

function openEditRecipeDialog(recipeId) {
  const recipe = appState.recipes.find((recipeItem) => recipeItem.id === recipeId);

  if (!recipe) {
    return;
  }

  clearRecipeForm();

  if (DOM.recipeDialogTitle) {
    DOM.recipeDialogTitle.textContent = "Recipe Card - Edit";
  }

  if (DOM.recipeIdInput) {
    DOM.recipeIdInput.value = recipe.id;
  }

  if (DOM.recipeTitleInput) {
    DOM.recipeTitleInput.value = recipe.title;
  }
	
	if (DOM.recipeDescriptionInput) {
		DOM.recipeDescriptionInput.value = recipe.description || "";
	}

	if (DOM.recipePrepTimeInput) {
		DOM.recipePrepTimeInput.value = recipe.prepTime || "";
	}

	if (DOM.recipeCookTimeInput) {
		DOM.recipeCookTimeInput.value = recipe.cookTime || "";
	}

	if (DOM.recipeTotalTimeInput) {
		DOM.recipeTotalTimeInput.value = recipe.totalTime || "";
	}

	if (DOM.recipeServingsInput) {
		DOM.recipeServingsInput.value = recipe.servings || "";
	}

  if (DOM.recipeIngredientsInput) {
    DOM.recipeIngredientsInput.value = recipe.ingredients.join("\n");
  }

  if (DOM.recipeInstructionsInput) {
    DOM.recipeInstructionsInput.value = recipe.instructions || "";
  }

	if (DOM.recipeNotesInput) {
		DOM.recipeNotesInput.value = recipe.notes || "";
	}

	if (DOM.recipeNutritionInput) {
		DOM.recipeNutritionInput.value = recipe.nutrition || "";
	}

  if (DOM.recipeSourceUrlInput) {
    DOM.recipeSourceUrlInput.value = recipe.sourceUrl || "";
  }

  setRecipeCategoryCheckboxes(recipe.categories);

  if (DOM.deleteRecipeButton) {
    DOM.deleteRecipeButton.style.display = "inline-block";
  }

  openDialog(DOM.recipeDialog);
}

function closeRecipeDialog() {
  if (!DOM.recipeDialog) {
    return;
  }

  DOM.recipeDialog.close();
}

function clearRecipeForm() {
  if (DOM.recipeForm) {
    DOM.recipeForm.reset();
  }

  if (DOM.recipeIdInput) {
    DOM.recipeIdInput.value = "";
  }
	
	if (DOM.recipeDescriptionInput) {
		DOM.recipeDescriptionInput.value = "";
	}

	if (DOM.recipePrepTimeInput) {
		DOM.recipePrepTimeInput.value = "";
	}

	if (DOM.recipeCookTimeInput) {
		DOM.recipeCookTimeInput.value = "";
	}

	if (DOM.recipeTotalTimeInput) {
		DOM.recipeTotalTimeInput.value = "";
	}

	if (DOM.recipeServingsInput) {
		DOM.recipeServingsInput.value = "";
	}

	if (DOM.recipeNotesInput) {
		DOM.recipeNotesInput.value = "";
	}

	if (DOM.recipeNutritionInput) {
		DOM.recipeNutritionInput.value = "";
	}

  setRecipeCategoryCheckboxes(["Dinner"]);
}

function getSelectedRecipeCategories() {
  const selectedCategories = DOM.recipeCategoryCheckboxes
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  return sanitizeRecipeCategories(selectedCategories);
}

function setRecipeCategoryCheckboxes(categories) {
  const safeCategories = sanitizeRecipeCategories(categories);

  DOM.recipeCategoryCheckboxes.forEach((checkbox) => {
    checkbox.checked = safeCategories.includes(checkbox.value);
  });
}

async function handleRecipeFormSubmit(event) {
  event.preventDefault();

  const recipeTitle = DOM.recipeTitleInput.value.trim().slice(0, 15);

  if (!recipeTitle) {
    alert("Please enter a meal or recipe name.");
    return;
  }

  const existingRecipeId = DOM.recipeIdInput.value.trim();

  const existingRecipe = appState.recipes.find((recipe) => recipe.id === existingRecipeId);

const selectedRecipeCategories = getSelectedRecipeCategories();

const recipeData = {
  id: existingRecipeId || undefined,
  title: recipeTitle,
	description: DOM.recipeDescriptionInput.value.trim(),
	prepTime: DOM.recipePrepTimeInput.value.trim(),
	cookTime: DOM.recipeCookTimeInput.value.trim(),
	totalTime: DOM.recipeTotalTimeInput.value.trim(),
	servings: DOM.recipeServingsInput.value.trim(),
	categories: selectedRecipeCategories,
	ingredients: DOM.recipeIngredientsInput.value
      .split("\n")
      .map((ingredient) => ingredient.trim())
      .filter(Boolean),
    instructions: DOM.recipeInstructionsInput.value.trim(),
	notes: DOM.recipeNotesInput.value.trim(),
	nutrition: DOM.recipeNutritionInput.value.trim(),
    sourceUrl: DOM.recipeSourceUrlInput.value.trim(),
    createdAt: existingRecipe?.createdAt
  };

  const savedRecipe = await saveRecipeToDatabase(recipeData);

  if (!savedRecipe) {
    alert("The meal or recipe could not be saved.");
    return;
  }

  const existingIndex = appState.recipes.findIndex((recipe) => recipe.id === savedRecipe.id);

  if (existingIndex >= 0) {
    appState.recipes[existingIndex] = savedRecipe;
  } else {
    appState.recipes.push(savedRecipe);
  }

	sortRecipesByTitle();
	renderRecipeBoxList();
	renderAssignmentRecipeList();
	closeRecipeDialog();
}

async function handleDeleteRecipe() {
  const recipeId = DOM.recipeIdInput.value.trim();

  if (!recipeId) {
    closeRecipeDialog();
    return;
  }

  const confirmed = confirm("Delete this meal or recipe from the database?");

  if (!confirmed) {
    return;
  }

  await deleteRecipeFromDatabase(recipeId);

  appState.recipes = appState.recipes.filter((recipe) => recipe.id !== recipeId);

	removeDeletedRecipeFromCalendarMonths(recipeId);

	renderCalendarGrid();
	renderRecipeBoxList();
	renderAssignmentRecipeList();
	closeRecipeDialog();
}

function sortRecipesByTitle() {
  const categorySortOrder = {
    Breakfast: 0,
    Lunch: 1,
    Dinner: 2,
    "Snack/Dessert": 3
  };

  appState.recipes.sort((firstRecipe, secondRecipe) => {

    const firstCategoryRank = Math.min(
      ...sanitizeRecipeCategories(firstRecipe.categories)
        .map((categoryName) => categorySortOrder[categoryName] ?? 999)
    );

    const secondCategoryRank = Math.min(
      ...sanitizeRecipeCategories(secondRecipe.categories)
        .map((categoryName) => categorySortOrder[categoryName] ?? 999)
    );

    if (firstCategoryRank !== secondCategoryRank) {
      return firstCategoryRank - secondCategoryRank;
    }

    return firstRecipe.title.localeCompare(
      secondRecipe.title,
      undefined,
      { sensitivity: "base" }
    );

  });
}

/* <------------------------------------------------
      CALENDAR DATE ENGINE
   -------------------------------------------------> */

function updateCalendarDateEngine() {
  const monthIndex = Number(DOM.monthSelect?.value ?? appState.currentDate.getMonth());
  const year = Number(DOM.yearInput?.value ?? appState.currentDate.getFullYear());

  appState.calendar.activeMonthIndex = monthIndex;
  appState.calendar.activeYear = year;
  appState.calendar.firstDayIndex = new Date(year, monthIndex, 1).getDay();
  appState.calendar.daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  console.log(
    `Calendar engine updated: ${getMonthName(monthIndex)} ${year}, starts on weekday index ${appState.calendar.firstDayIndex}, ${appState.calendar.daysInMonth} days.`
  );
}

/* <------------------------------------------------
      ACTIVE MEAL CATEGORY HELPER
   -------------------------------------------------> */

function getActiveMealCategories() {
  return [...appState.settings.activeCategories];
}

/* <------------------------------------------------
      CALENDAR MEAL ASSIGNMENT SYSTEM
   -------------------------------------------------> */

function getCurrentMonthWorkingData() {
  const slotKey = getCurrentMonthSlotKey();

  if (!appState.calendarMonthsBySlot[slotKey]) {
    appState.calendarMonthsBySlot[slotKey] = buildCurrentMonthFoundationData();
  }

  return appState.calendarMonthsBySlot[slotKey];
}

function getSelectedRecipeIdForDayCategory(dayNumber, categoryName) {
  const monthData = getCurrentMonthWorkingData();
  const dayKey = String(dayNumber);

  return monthData.days?.[dayKey]?.[categoryName] || "";
}

async function saveMealSelectionForDayCategory(dayNumber, categoryName, recipeId) {
  const monthData = getCurrentMonthWorkingData();
  const dayKey = String(dayNumber);

  if (!monthData.days[dayKey]) {
    monthData.days[dayKey] = {};
  }

  if (recipeId) {
    monthData.days[dayKey][categoryName] = recipeId;
  } else {
    delete monthData.days[dayKey][categoryName];
  }

  monthData.calendarName = appState.settings.calendarName;
  monthData.enabledCategories = getActiveMealCategories();
  monthData.updatedAt = new Date().toISOString();

  appState.calendarMonthsBySlot[monthData.slotKey] = monthData;

  await saveCalendarMonthToDatabase(monthData);
}

/* <------------------------------------------------
      AUTO SAVE TOAST SYSTEM
   -------------------------------------------------> */

function showAutoSaveToast() {
  if (!DOM.autoSaveToast) {
    return;
  }

  DOM.autoSaveToast.classList.add("visible");

  window.clearTimeout(DOM.autoSaveToast.hideTimeoutId);

  DOM.autoSaveToast.hideTimeoutId = window.setTimeout(() => {
    DOM.autoSaveToast.classList.remove("visible");
  }, 2200);
}

/* <------------------------------------------------
      CALENDAR DAY RECIPE ASSIGNMENT SYSTEM
   -------------------------------------------------> */

function cancelSlotChoiceDialog() {
  appState.pendingSlotChoice = null;

  if (DOM.slotChoiceDialog) {
    DOM.slotChoiceDialog.close();
  }
}

function getDayMealSlots(dayData) {
  if (!dayData) {
    return {};
  }

  if (dayData.meals && typeof dayData.meals === "object") {
    return { ...dayData.meals };
  }

  const convertedMeals = {};

  if (Array.isArray(dayData.recipeIds)) {
    dayData.recipeIds.forEach((recipeId) => {
      const recipe = getRecipeById(recipeId);

      if (!recipe) {
        return;
      }

      const categoryName = getPrimaryRecipeCategory(recipe);

      if (!convertedMeals[categoryName]) {
        convertedMeals[categoryName] = recipeId;
      }
    });
  }

  return convertedMeals;
}

function getMealSlotEntriesForDay(dayNumber) {
  const monthData = getCurrentMonthWorkingData();
  const dayKey = String(dayNumber);
  const dayData = monthData.days?.[dayKey] || {};
  const meals = getDayMealSlots(dayData);

  return MEAL_CATEGORIES
    .filter((categoryName) => meals[categoryName])
    .map((categoryName) => {
      return {
        categoryName,
        recipeId: meals[categoryName]
      };
    });
}

function buildSlotChoiceOptions(dayNumber, recipe) {
  const monthData = getCurrentMonthWorkingData();
  const dayKey = String(dayNumber);
  const dayData = monthData.days?.[dayKey] || {};
  const meals = getDayMealSlots(dayData);
  const recipeCategories = sanitizeRecipeCategories(recipe.categories);

  return recipeCategories.map((categoryName) => {
    const existingRecipeId = meals[categoryName] || "";
    const existingRecipe = existingRecipeId ? getRecipeById(existingRecipeId) : null;

    return {
      categoryName,
      existingRecipeId,
      existingRecipeTitle: existingRecipe ? existingRecipe.title : "",
      actionText: existingRecipe
        ? `Replace ${categoryName}: ${existingRecipe.title}`
        : `Add as ${categoryName}`
    };
  });
}

function chooseAutomaticMealSlot(slotOptions) {
  const emptyOptions = slotOptions.filter((option) => !option.existingRecipeId);

  if (emptyOptions.length === 1) {
    return emptyOptions[0];
  }

  if (slotOptions.length === 1) {
    return slotOptions[0];
  }

  return null;
}

function openSlotChoiceDialog(dayNumber, recipeId, sourceDayNumber = null) {
  const recipe = getRecipeById(recipeId);

  if (!recipe || !DOM.slotChoiceDialog || !DOM.slotChoiceOptions || !DOM.slotChoiceMessage) {
    return;
  }

  const slotOptions = buildSlotChoiceOptions(dayNumber, recipe);

  appState.pendingSlotChoice = {
    dayNumber,
    recipeId,
    sourceDayNumber
  };

	const emptySlotCount = slotOptions.filter((slotOption) => {
		return !slotOption.existingRecipeId;
	}).length;

	const filledSlotCount = slotOptions.length - emptySlotCount;

	if (emptySlotCount > 0 && filledSlotCount > 0) {
		DOM.slotChoiceMessage.textContent =
			`${recipe.title} can be added to an empty matching slot or can replace an existing matching recipe.`;
	} else if (emptySlotCount > 1) {
		DOM.slotChoiceMessage.textContent =
			`${recipe.title} matches more than one empty meal slot. Choose where it should go.`;
	} else {
		DOM.slotChoiceMessage.textContent =
			`${recipe.title} matches filled meal slots. Choose which recipe to replace.`;
	}

  DOM.slotChoiceOptions.innerHTML = "";

  slotOptions.forEach((slotOption) => {
    const optionButton = document.createElement("button");

    optionButton.type = "button";
    optionButton.className = "slot-choice-option-button";
    optionButton.textContent = slotOption.actionText;

    optionButton.addEventListener("click", async () => {
      await finalizeRecipeSlotChoice(slotOption.categoryName);
    });

    DOM.slotChoiceOptions.appendChild(optionButton);
  });

  openDialog(DOM.slotChoiceDialog);
}

async function finalizeRecipeSlotChoice(categoryName) {
  const pendingChoice = appState.pendingSlotChoice;

  if (!pendingChoice) {
    return;
  }

  appState.pendingSlotChoice = null;

  if (DOM.slotChoiceDialog) {
    DOM.slotChoiceDialog.close();
  }

  await assignRecipeToCalendarDaySlot(
    pendingChoice.dayNumber,
    pendingChoice.recipeId,
    categoryName,
    pendingChoice.sourceDayNumber
  );
}

function getRecipeById(recipeId) {
  return appState.recipes.find((recipe) => recipe.id === recipeId) || null;
}

function getPrimaryRecipeCategory(recipe) {
  const categorySortOrder = {
    Breakfast: 0,
    Lunch: 1,
    Dinner: 2,
    "Snack/Dessert": 3
  };

  const safeCategories = sanitizeRecipeCategories(recipe.categories);

  return safeCategories.sort((firstCategory, secondCategory) => {
    return categorySortOrder[firstCategory] - categorySortOrder[secondCategory];
  })[0];
}

function getSortedRecipeIdsForDay(dayData) {
  const recipeIds = Array.isArray(dayData.recipeIds)
    ? [...dayData.recipeIds]
    : [];

  return recipeIds.sort((firstRecipeId, secondRecipeId) => {
    const firstRecipe = getRecipeById(firstRecipeId);
    const secondRecipe = getRecipeById(secondRecipeId);

    if (!firstRecipe || !secondRecipe) {
      return 0;
    }

    const firstCategory = getPrimaryRecipeCategory(firstRecipe);
    const secondCategory = getPrimaryRecipeCategory(secondRecipe);

    const categorySortOrder = {
      Breakfast: 0,
      Lunch: 1,
      Dinner: 2,
      "Snack/Dessert": 3
    };

    const categoryDifference =
      categorySortOrder[firstCategory] - categorySortOrder[secondCategory];

    if (categoryDifference !== 0) {
      return categoryDifference;
    }

    return firstRecipe.title.localeCompare(
      secondRecipe.title,
      undefined,
      { sensitivity: "base" }
    );
  });
}

function getDayRecipeIds(dayNumber) {
  return getMealSlotEntriesForDay(dayNumber).map((slotEntry) => {
    return slotEntry.recipeId;
  });
}

async function moveRecipeToCalendarDay(sourceDayNumber, targetDayNumber, recipeId) {
  if (sourceDayNumber === targetDayNumber) {
    return;
  }

  const recipe = getRecipeById(recipeId);

  if (!recipe) {
    return;
  }

  const slotOptions = buildSlotChoiceOptions(targetDayNumber, recipe);
  const automaticSlot = chooseAutomaticMealSlot(slotOptions);

  if (automaticSlot) {
    await assignRecipeToCalendarDaySlot(
      targetDayNumber,
      recipeId,
      automaticSlot.categoryName,
      sourceDayNumber
    );
    return;
  }

  openSlotChoiceDialog(targetDayNumber, recipeId, sourceDayNumber);
}

async function removeRecipeFromCalendarDay(dayNumber, recipeId) {
  const monthData = getCurrentMonthWorkingData();
  const dayKey = String(dayNumber);

  if (!monthData.days?.[dayKey]) {
    return;
  }

  const meals = getDayMealSlots(monthData.days[dayKey]);

  Object.keys(meals).forEach((categoryName) => {
    if (meals[categoryName] === recipeId) {
      delete meals[categoryName];
    }
  });

  if (Object.keys(meals).length === 0) {
    delete monthData.days[dayKey];
  } else {
    monthData.days[dayKey].meals = meals;
    delete monthData.days[dayKey].recipeIds;
  }

  monthData.updatedAt = new Date().toISOString();

  appState.calendarMonthsBySlot[monthData.slotKey] = monthData;

  const wasSaved = await saveCalendarMonthToDatabase(monthData);

  renderCalendarGrid();

  if (wasSaved) {
    showAutoSaveToast();
  } else {
    alert("The calendar could not be auto-saved. Please try again.");
  }
}

async function assignRecipeToCalendarDaySlot(dayNumber, recipeId, categoryName, sourceDayNumber = null) {
  const recipe = getRecipeById(recipeId);

  if (!recipe || !MEAL_CATEGORIES.includes(categoryName)) {
    return;
  }

  const monthData = getCurrentMonthWorkingData();
  const dayKey = String(dayNumber);

  if (!monthData.days[dayKey]) {
    monthData.days[dayKey] = {};
  }

  const meals = getDayMealSlots(monthData.days[dayKey]);

  meals[categoryName] = recipeId;

  monthData.days[dayKey].meals = meals;
  delete monthData.days[dayKey].recipeIds;

  if (sourceDayNumber && sourceDayNumber !== dayNumber) {
    const sourceDayKey = String(sourceDayNumber);

    if (monthData.days[sourceDayKey]) {
      const sourceMeals = getDayMealSlots(monthData.days[sourceDayKey]);

      Object.keys(sourceMeals).forEach((sourceCategoryName) => {
        if (sourceMeals[sourceCategoryName] === recipeId) {
          delete sourceMeals[sourceCategoryName];
        }
      });

      if (Object.keys(sourceMeals).length === 0) {
        delete monthData.days[sourceDayKey];
      } else {
        monthData.days[sourceDayKey].meals = sourceMeals;
        delete monthData.days[sourceDayKey].recipeIds;
      }
    }
  }

  monthData.calendarName = appState.settings.calendarName;
  monthData.enabledCategories = getActiveMealCategories();
  monthData.updatedAt = new Date().toISOString();

  appState.calendarMonthsBySlot[monthData.slotKey] = monthData;

  const wasSaved = await saveCalendarMonthToDatabase(monthData);

  renderCalendarGrid();

  if (wasSaved) {
    showAutoSaveToast();
  } else {
    alert("The calendar could not be auto-saved. Please try again.");
  }
}

async function assignRecipeToCalendarDay(dayNumber, recipeId) {
  const recipe = getRecipeById(recipeId);

  if (!recipe) {
    return;
  }

  const slotOptions = buildSlotChoiceOptions(dayNumber, recipe);
  const automaticSlot = chooseAutomaticMealSlot(slotOptions);

  if (automaticSlot) {
    await assignRecipeToCalendarDaySlot(dayNumber, recipeId, automaticSlot.categoryName);
    return;
  }

  openSlotChoiceDialog(dayNumber, recipeId);
}

/* <------------------------------------------------
      42 CELL CALENDAR GRID RENDERING
   -------------------------------------------------> */

function renderCalendarGrid() {
  if (!DOM.calendarGrid) {
    return;
  }

  DOM.calendarGrid.innerHTML = "";

  const {
    firstDayIndex,
    daysInMonth,
    totalCalendarCells
  } = appState.calendar;

  for (let cellIndex = 0; cellIndex < totalCalendarCells; cellIndex += 1) {
    const dayNumber = cellIndex - firstDayIndex + 1;
    const isActiveDay = dayNumber >= 1 && dayNumber <= daysInMonth;

    const dayCell = document.createElement("div");
    dayCell.className = isActiveDay
      ? "calendar-day-cell"
      : "calendar-day-cell inactive-day";

		if (isActiveDay) {
			dayCell.dataset.dayNumber = String(dayNumber);

			dayCell.addEventListener("click", async () => {

				const wasTouchAssigned =
					await assignSelectedTouchRecipeToDay(dayNumber);

				if (wasTouchAssigned) {
					return;
				}

				openAssignmentPanelForDay(dayNumber);

			});
			
		dayCell.addEventListener("dragover", (event) => {
			event.preventDefault();
			dayCell.classList.add("drag-over-day");
		});

		dayCell.addEventListener("dragleave", () => {
			dayCell.classList.remove("drag-over-day");
		});

		dayCell.addEventListener("drop", async (event) => {
			event.preventDefault();

			dayCell.classList.remove("drag-over-day");

			const sourceDayNumber = Number(event.dataTransfer.getData("application/x-calendar-day"));
			const movedRecipeId = event.dataTransfer.getData("application/x-calendar-recipe");
			const newRecipeId = event.dataTransfer.getData("text/plain");

			if (sourceDayNumber && movedRecipeId) {
				await moveRecipeToCalendarDay(sourceDayNumber, dayNumber, movedRecipeId);
				return;
			}

			if (newRecipeId) {
				await assignRecipeToCalendarDay(dayNumber, newRecipeId);
			}
		});		
	}

    const dayNumberElement = document.createElement("div");
    dayNumberElement.className = "day-number";
    dayNumberElement.textContent = isActiveDay ? String(dayNumber) : "";

		const mealDisplayList = document.createElement("div");
		mealDisplayList.className = "calendar-meal-display-list";

		if (isActiveDay) {
			const assignedSlotEntries = getMealSlotEntriesForDay(dayNumber);

			assignedSlotEntries.forEach((slotEntry) => {
				const recipe = getRecipeById(slotEntry.recipeId);

				if (!recipe) {
					return;
				}

				const recipeName = document.createElement("div");
				recipeName.className = "calendar-meal-name";
				recipeName.textContent = recipe.title;
				recipeName.draggable = true;
				recipeName.dataset.recipeId = slotEntry.recipeId;
				recipeName.dataset.dayNumber = String(dayNumber);
				recipeName.dataset.categoryName = slotEntry.categoryName;

				recipeName.addEventListener("dragstart", (event) => {
					event.stopPropagation();

					recipeName.classList.add("dragging-calendar-recipe");

					event.dataTransfer.setData("application/x-calendar-day", String(dayNumber));
					event.dataTransfer.setData("application/x-calendar-recipe", slotEntry.recipeId);
					event.dataTransfer.setData("application/x-calendar-category", slotEntry.categoryName);
				});

				recipeName.addEventListener("dragend", () => {
					recipeName.classList.remove("dragging-calendar-recipe");
				});

				mealDisplayList.appendChild(recipeName);
			});
		}

		dayCell.appendChild(dayNumberElement);
		dayCell.appendChild(mealDisplayList);

    DOM.calendarGrid.appendChild(dayCell);
  }
}

/* <------------------------------------------------
      MONTH YEAR DISPLAY FOUNDATION
   -------------------------------------------------> */

function updateVisibleMonthYear() {
  updateCalendarDateEngine();

  const monthIndex = appState.calendar.activeMonthIndex;
  const year = appState.calendar.activeYear;

  const monthName = getMonthName(monthIndex);
  const displayText = `${monthName} ${year}`;

  if (DOM.printMonthYear) {
    DOM.printMonthYear.textContent = displayText;
  }

  renderCalendarGrid();
}

function getMonthName(monthIndex) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return monthNames[monthIndex] || "Month";
}

/* <------------------------------------------------
      CALENDAR MONTHS STORE
   -------------------------------------------------> */

async function saveCalendarMonthToDatabase(monthData) {
  try {
    const cleanMonthData = structuredClone(monthData);

    await saveRecordToStore(DATABASE_STORES.calendarMonths, cleanMonthData);

    console.log("Calendar month saved:", cleanMonthData.slotKey, cleanMonthData.days);

    return true;
  } catch (error) {
    console.warn("Calendar month could not be saved.", error);
    return false;
  }
}

async function loadCalendarMonthFromDatabase(slotKey) {
  try {
    return await getRecordFromStore(DATABASE_STORES.calendarMonths, slotKey);
  } catch (error) {
    console.warn("Calendar month could not be loaded.", error);
    return null;
  }
}

/* <------------------------------------------------
      MONTH CATEGORY AUTOSAVE
   -------------------------------------------------> */

async function autoSaveCurrentMonthCategories() {
  updateCalendarDateEngine();

  const slotKey = getCurrentMonthSlotKey();
  const existingMonth =
    appState.calendarMonthsBySlot[slotKey] ||
    (await loadCalendarMonthFromDatabase(slotKey));

  const monthData = existingMonth || buildCurrentMonthFoundationData();

  monthData.calendarName = appState.settings.calendarName;
  monthData.enabledCategories = getActiveMealCategories();
  monthData.updatedAt = new Date().toISOString();

  appState.calendarMonthsBySlot[slotKey] = monthData;

  await saveCalendarMonthToDatabase(monthData);
}

/* <------------------------------------------------
      MONTH SAVE LOAD FOUNDATION
   -------------------------------------------------> */

function getCurrentMonthSlotKey() {

  return buildMonthSlotKey(
    appState.calendar.activeYear,
    appState.calendar.activeMonthIndex
  );

}

function buildMonthSlotKey(year, monthIndex) {

  const monthNumber =
    String(monthIndex + 1).padStart(2, "0");

  return `planner-month-${year}-${monthNumber}`;

}

function buildCurrentMonthFoundationData() {
  return {
    slotKey: getCurrentMonthSlotKey(),
    calendarName: appState.settings.calendarName,
    monthIndex: appState.calendar.activeMonthIndex,
    year: appState.calendar.activeYear,
    enabledCategories: getActiveMealCategories(),
    days: {},
    savedAt: new Date().toISOString()
  };
}

async function saveCurrentMonthFoundation() {
  updateCalendarDateEngine();

  const monthData = getCurrentMonthWorkingData();

  monthData.calendarName = appState.settings.calendarName;
  monthData.monthIndex = appState.calendar.activeMonthIndex;
  monthData.year = appState.calendar.activeYear;
  monthData.enabledCategories = getActiveMealCategories();
  monthData.updatedAt = new Date().toISOString();

  if (!monthData.days) {
    monthData.days = {};
  }

  appState.calendarMonthsBySlot[monthData.slotKey] = monthData;

  const wasSaved = await saveCalendarMonthToDatabase(monthData);

  if (wasSaved) {
    alert(`${getMonthName(monthData.monthIndex)} ${monthData.year} has been saved.`);
  } else {
    alert("The calendar could not be saved. Please try again.");
  }
}

async function loadCurrentMonthFoundation() {
  updateCalendarDateEngine();

  const slotKey = getCurrentMonthSlotKey();
  const savedMonth = await loadCalendarMonthFromDatabase(slotKey);

  if (!savedMonth) {
    appState.calendarMonthsBySlot[slotKey] = buildCurrentMonthFoundationData();
    renderCalendarGrid();
    return;
  }

  appState.calendarMonthsBySlot[slotKey] = savedMonth;

  appState.settings.calendarName = savedMonth.calendarName || DEFAULT_SETTINGS.calendarName;

  if (DOM.calendarNameInput) {
    DOM.calendarNameInput.value = appState.settings.calendarName;
  }

  if (Array.isArray(savedMonth.enabledCategories) && savedMonth.enabledCategories.length > 0) {
    appState.settings.activeCategories = [...savedMonth.enabledCategories];
  }

  updateCalendarTitleDisplays();

  console.log("Calendar month loaded:", slotKey, savedMonth.days);

  renderCalendarGrid();
}

function applySavedMonthCategories(enabledCategories) {
  applyCategoriesToCheckboxes(enabledCategories);
  synchronizeCategoryState();
}

/* <------------------------------------------------
      MONTH NAVIGATION FOUNDATION
   -------------------------------------------------> */

async function loadSelectedMonth() {
  sanitizeYearInput();
  updateVisibleMonthYear();
  await loadCurrentMonthFoundation();
}

async function autoLoadSelectedMonth() {
  sanitizeYearInput();
  updateVisibleMonthYear();
  await loadCurrentMonthFoundation();
}

async function goToCurrentMonth() {

  const today = new Date();

  DOM.monthSelect.value = String(today.getMonth());
  DOM.yearInput.value = String(today.getFullYear());

  await autoLoadSelectedMonth();

}

function sanitizeYearInput() {
  const minimumYear = Number(DOM.yearInput.min) || 1900;
  const maximumYear = Number(DOM.yearInput.max) || 2200;
  let selectedYear = Number(DOM.yearInput.value);

  if (!Number.isFinite(selectedYear)) {
    selectedYear = new Date().getFullYear();
  }

  if (selectedYear < minimumYear) {
    selectedYear = minimumYear;
  }

  if (selectedYear > maximumYear) {
    selectedYear = maximumYear;
  }

  DOM.yearInput.value = String(selectedYear);
}

async function goToPreviousMonth() {

  sanitizeYearInput();

  let monthIndex = Number(DOM.monthSelect.value);
  let year = Number(DOM.yearInput.value);

  monthIndex -= 1;

  if (monthIndex < 0) {
    monthIndex = 11;
    year -= 1;
  }

  DOM.monthSelect.value = String(monthIndex);
  DOM.yearInput.value = String(year);

  await autoLoadSelectedMonth();

}

async function goToNextMonth() {

  sanitizeYearInput();

  let monthIndex = Number(DOM.monthSelect.value);
  let year = Number(DOM.yearInput.value);

  monthIndex += 1;

  if (monthIndex > 11) {
    monthIndex = 0;
    year += 1;
  }

  DOM.monthSelect.value = String(monthIndex);
  DOM.yearInput.value = String(year);

  await autoLoadSelectedMonth();

}

/* <------------------------------------------------
      RIGHT SIDE PANCAKE MENU SYSTEM
   -------------------------------------------------> */
	 
function updateDarkModeButtonText() {
  if (!DOM.toggleDarkModeButton) {
    return;
  }

  DOM.toggleDarkModeButton.textContent =
    `Dark Mode: ${appState.settings.darkMode ? "ON" : "OFF"}`;
}

async function toggleDarkMode() {
  appState.settings.darkMode = !appState.settings.darkMode;

  document.body.classList.toggle("dark-mode", appState.settings.darkMode);

  updateDarkModeButtonText();

  await saveSettingsToDatabase();
}	 

function toggleHamburgerMenu() {
  if (!DOM.hamburgerMenu) {
    return;
  }

  DOM.hamburgerMenu.classList.toggle("open");
}

function closeHamburgerMenu() {
  if (!DOM.hamburgerMenu) {
    return;
  }

  DOM.hamburgerMenu.classList.remove("open");
}

/* <------------------------------------------------
      DIALOG OPENING HELPER
   -------------------------------------------------> */

function openDialog(dialogElement) {
  if (!dialogElement) {
    return;
  }

  if (typeof dialogElement.showModal === "function") {
    dialogElement.showModal();
    return;
  }

  dialogElement.setAttribute("open", "open");
}

/* <------------------------------------------------
      TEMPORARY PLACEHOLDER MESSAGE
   -------------------------------------------------> */

function showFeatureComingLaterMessage() {
  alert("This feature will be added in a later step.");
}

/* <------------------------------------------------
      SERVICE WORKER REGISTRATION FOUNDATION
   -------------------------------------------------> */

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    console.log("Service workers are not supported in this browser.");
    return;
  }

  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => {
      console.log("Service worker registration started.");
    })
    .catch((error) => {
      console.warn("Service worker registration failed:", error);
    });
}
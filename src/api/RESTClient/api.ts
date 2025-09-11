import RESTClient from './RESTClient';
import * as routes from './routes';

// Функція для зв'язування всіх API з клієнтом
export const bindAllApi = (thisArg: RESTClient) => {
  return {
    // Об'єкт для роботи з аутентифікацією
    auth: {
      login: routes.auth.login.bind(thisArg), // Логін
      refresh: routes.auth.tokenRefresh.bind(thisArg), // Оновлення токену.
      verify: routes.auth.tokenVerify.bind(thisArg), // Перевірка токену.
      logout: routes.auth.logout.bind(thisArg), // Вихід з системи.
      passwordReset: routes.auth.passwordReset.bind(thisArg), // Скидання паролю користувача.
      passwordResetConfirm: routes.auth.passwordResetConfirm.bind(thisArg), // Підтвердження скидання паролю.
    },
    // Об'єкт для роботи з туристами
    tourists: {
      register: routes.tourists.registerTourist.bind(thisArg), // Реєстрація туриста.
      activate: routes.tourists.activationTourist.bind(thisArg), // Активація туриста.
      deactivate: routes.tourists.deactivationTourist.bind(thisArg), // Деактивація туриста.
      activateByToken: routes.tourists.activationTouristByToken.bind(thisArg), // Активація туриста за його токеном.
      getAll: routes.tourists.getAllTourists.bind(thisArg), // Отримання всіх туристів.
      getById: routes.tourists.getTouristById.bind(thisArg), // Отримання туриста по ID.
      put: routes.tourists.putTourist.bind(thisArg), // Оновлення туриста.
      patch: routes.tourists.patchTourist.bind(thisArg), // Оновлення частини туриста.
    },
    // Об'єкт для роботи з власниками Ґлемпу
    glampOwners: {
      register: routes.glampOwners.registerGlampOwner.bind(thisArg), // Реєстрація власника Ґлемпу.
      activate: routes.glampOwners.activationGlampOwner.bind(thisArg), // Активація власника Ґлемпу.
      deactivate: routes.glampOwners.deactivationGlampOwner.bind(thisArg), // Деактивація власника Ґлемпу.
      activateByToken:
        routes.glampOwners.activationGlampOwnerByToken.bind(thisArg), // Активація власника Ґлемпу за його токеном.
      getAll: routes.glampOwners.getAllGlampOwners.bind(thisArg), // Отримання всіх власників Ґлемпу.
      getById: routes.glampOwners.getGlampOwnerById.bind(thisArg), // Отримання власника Ґлемпу по ID.
      put: routes.glampOwners.putGlampOwner.bind(thisArg), // Оновлення власника Ґлемпу.
      patch: routes.glampOwners.patchGlampOwner.bind(thisArg), // Оновлення частини власника Ґлемпу.
    },
    // Об'єкт для роботи з користувачем
    users: {
      getAll: routes.users.getAllUsers.bind(thisArg), // Отримання всіх користувачів.
      getById: routes.users.getUserById.bind(thisArg), // Отримання користувача по ID.
      put: routes.users.putUser.bind(thisArg), // Оновлення користувача.
      patch: routes.users.patchUser.bind(thisArg), // Оновлення частини користувача.
      activate: routes.users.activationUser.bind(thisArg), // Активація користувача.
      deactivate: routes.users.deactivationUser.bind(thisArg), // Деактивація користувача.
      getCurrentUser: routes.users.getCurrentUser.bind(thisArg), // Отримання поточного користувача.
    },
    // Об'єкт для роботи з Ґлемпом
    glamps: {
      getAll: routes.glamps.getAllGlamps.bind(thisArg), // Отримання всіх Ґлемпів.
      getById: routes.glamps.getGlampById.bind(thisArg), // Отримання Ґлемпа по ID.
      delete: routes.glamps.deleteGlamp.bind(thisArg), // Видалення Ґлемпа.
      register: routes.glamps.registerGlamp.bind(thisArg), // Реєстрація Ґлемпа.

      put: routes.glamps.putGlamp.bind(thisArg), // Оновлення Ґлемпа.
      putActivate: routes.glamps.putGlampActivation.bind(thisArg), // Активація Ґлемпа.
      putApproved: routes.glamps.putGlampApproval.bind(thisArg), // Схвалення Ґлемпа.
      putDraft: routes.glamps.putGlampDraft.bind(thisArg), // Збереження Ґлемпа як чернетки.
      putImages: routes.glamps.putGlampImages.bind(thisArg), // Оновлення зображень.
      putPremiumLevel: routes.glamps.putGlampPremiumLevel.bind(thisArg), // Зміна рівня преміум-статусу.
      putPriority: routes.glamps.putGlampPriority.bind(thisArg), // Зміна пріоритетності.
      putRating: routes.glamps.putGlampRating.bind(thisArg), // Оновлення рейтингу.
      putVerified: routes.glamps.putGlampVerification.bind(thisArg), // Верифікація Ґлемпа.
      putVisibility: routes.glamps.putGlampVisibility.bind(thisArg), // Приховування Ґлемпа.

      patch: routes.glamps.patchGlamp.bind(thisArg), // Оновлення частини Ґлемпа.
      patchActivate: routes.glamps.patchGlampActivation.bind(thisArg), // Активація Ґлемпа.
      patchApproved: routes.glamps.patchGlampApproval.bind(thisArg), // Схвалення Ґлемпа.
      patchDraft: routes.glamps.patchGlampDraft.bind(thisArg), // Збереження Ґлемпа як чернетки.
      patchImages: routes.glamps.patchGlampImages.bind(thisArg), // Оновлення зображень.
      patchPremiumLevel: routes.glamps.patchGlampPremiumLevel.bind(thisArg), // Зміна рівня преміум-статусу.
      patchPriority: routes.glamps.patchGlampPriority.bind(thisArg), // Зміна пріоритетності.
      patchRating: routes.glamps.patchGlampRating.bind(thisArg), // Оновлення рейтингу.
      patchVerified: routes.glamps.patchGlampVerification.bind(thisArg), // Верифікація Ґлемпа.
      patchVisibility: routes.glamps.patchGlampVisibility.bind(thisArg), // Приховування Ґлемпа.
    },
    // Об'єкт для роботи з подіями
    eventlogs: {
      getAll: routes.eventlogs.getAllEventLogs.bind(thisArg), // Отримання всіх подій.
      getById: routes.eventlogs.getEventLogById.bind(thisArg), // Отримання події по ID.
    },
    // Об'єкт для роботи з Менеджером
    managers: {
      getById: routes.managers.getManagerById.bind(thisArg), // Отримання Менеджера по ID.
      getAll: routes.managers.getAllManagers.bind(thisArg), // Отримання всіх Менеджерів.
      register: routes.managers.registerManager.bind(thisArg), // Реєстрація Менеджера.
      activate: routes.managers.activationManager.bind(thisArg), // Активація Менеджера.
      deactivate: routes.managers.deactivationManager.bind(thisArg), // Деактивація Менеджера.
      put: routes.managers.putManager.bind(thisArg), // Оновлення Менеджера.
      patch: routes.managers.patchManager.bind(thisArg), // Оновлення частини Менеджера.
    },
    // Об'єкт для роботи з Адміністратором
    administrators: {
      register: routes.administrators.registerAdministrator.bind(thisArg), // Реєстрація Адміністратора
      getById: routes.administrators.getAdministratorById.bind(thisArg), // Отримання Адміністратора по ID.
      getAll: routes.administrators.getAllAdministrators.bind(thisArg), // Отримання всіх Адміністраторів.
      activate: routes.administrators.activationAdministrator.bind(thisArg), // Активація Адміністратора.
      deactivate: routes.administrators.deactivationAdministrator.bind(thisArg), // Деактивація Адміністратора.
      put: routes.administrators.putAdministrator.bind(thisArg), // Оновлення Адміністратора.
      patch: routes.administrators.patchAdministrator.bind(thisArg), // Оновлення частини Адміністратора.
    },
    // Об'єкт для роботи з Категоріями
    categories: {
      getById: routes.categories.getCategoryById.bind(thisArg), // Отримання Категорії по ID.
      getAll: routes.categories.getAllCategories.bind(thisArg), // Отримання всіх Категорій.
      create: routes.categories.createCategory.bind(thisArg), // Створення Категорії.
      put: routes.categories.putCategory.bind(thisArg), // Оновлення Категорії.
      patch: routes.categories.patchCategory.bind(thisArg), // Оновлення частини Категорії.
      delete: routes.categories.deleteCategory.bind(thisArg), // Видалення Категорії.

      glamps: {
        getAll: routes.categories.glamps.getAllGlampsByCategoryId.bind(thisArg), // Отримання всіх Ґлемпів з Категорії по ID Категорії.
        getById: routes.categories.glamps.getGlampByCategoryId.bind(thisArg), // Отримання Ґлемпа з Категорії по ID Категорії та по ID Ґлемпа.
      },
    },
  };
};

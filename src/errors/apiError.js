const {
  ERR_TASK_MANAGER_INVALID_TITLE,
  ERR_TASK_MANAGER_INVALID_DESCRIPTION,
  ERR_TASK_MANAGER_INVALID_IS_COMPLETION,
  ERR_TASK_MANAGER_DEFAULT,
  ERR_TASK_MANAGER_INVALID_TASK_ID,
  ERR_TASK_MANAGER_TASK_NOT_FOUND,
  ERR_TASK_MANAGER_INVALID_PRIORITY,
} = require('./errorCodes');

const newApiError = (errorCode, errorMessage) => ({ errorCode, errorMessage });

const handleValidationError = (errors) => {
  const errorResponses = errors?.errors?.map((error) => {
    if (error?.path === 'description') {
      return newApiError(ERR_TASK_MANAGER_INVALID_DESCRIPTION, error?.msg);
    }
    if (error?.path === 'title') {
      return newApiError(ERR_TASK_MANAGER_INVALID_TITLE, error?.msg);
    }
    if (error?.path === 'isComplete') {
      return newApiError(ERR_TASK_MANAGER_INVALID_IS_COMPLETION, error?.msg);
    }
    if (error?.path === 'taskID') {
      return newApiError(ERR_TASK_MANAGER_INVALID_TASK_ID, error?.msg);
    }
    if (error?.path === 'priority' || error?.path === 'level') {
      return newApiError(ERR_TASK_MANAGER_INVALID_PRIORITY, error?.msg);
    }
    return newApiError(ERR_TASK_MANAGER_DEFAULT, error?.msg);
  });

  const errorResponse = {
    errorCount: errorResponses.length,
    description: 'Please pass valid request,Go through the examples',
    errors: errorResponses,
  };

  return errorResponse;
};

const taskNotFound = newApiError(
  ERR_TASK_MANAGER_TASK_NOT_FOUND,
  'TaskID passed in the request is not found'
);
module.exports = { handleValidationError, taskNotFound };

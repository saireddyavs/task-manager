const {
  ERR_TASK_MANAGER_INVALID_TITLE,
  ERR_TASK_MANAGER_INVALID_DESCRIPTION,
  ERR_TASK_MANAGER_INVALID_IS_COMPLETION,
  ERR_TASK_MANAGER_DEFAULT,
  ERR_TASK_MANAGER_INVALID_TASK_ID,
  ERR_TASK_MANAGER_TASK_NOT_FOUND,
} = require("./errorCodes");

const newApiError = (errorCode, errorMessage) => {
  return { errorCode: errorCode, errorMessage: errorMessage };
};

const handleValidationError = (errors) => {
  const errorResponses = errors?.errors?.map((error) => {
    console.log(error);
    if (error?.path == "description") {
      return newApiError(ERR_TASK_MANAGER_INVALID_DESCRIPTION, error?.msg);
    } else if (error?.path == "title") {
      return newApiError(ERR_TASK_MANAGER_INVALID_TITLE, error?.msg);
    } else if (error?.path == "isComplete") {
      return newApiError(ERR_TASK_MANAGER_INVALID_IS_COMPLETION, error?.msg);
    } else if (error?.path == "taskID") {
      return newApiError(ERR_TASK_MANAGER_INVALID_TASK_ID, error?.msg);
    } else {
      return newApiError(ERR_TASK_MANAGER_DEFAULT, error?.msg);
    }
  });

  const errorResponse = {
    errorCount: errorResponses.length,
    description: "Please pass valid request,Go through the examples",
    errors: errorResponses,
  };

  return errorResponse;
};

const taskNotFound = newApiError(
  ERR_TASK_MANAGER_TASK_NOT_FOUND,
  "TaskID passed in the request is not found"
);
module.exports = { handleValidationError, taskNotFound };

const {
  ERR_TASK_MANAGER_INVALID_TITLE,
  ERR_TASK_MANAGER_INVALID_DESCRIPTION,
  ERR_TASK_MANAGER_INVALID_IS_COMPLETION,
  ERR_TASK_MANAGER_DEFAULT,
  ERR_TASK_MANAGER_INVALID_TASK_ID,
  ERR_TASK_MANAGER_TASK_NOT_FOUND,
} = require("./errorCodes");

const handleValidationError = (errors) => {
  const errorResponses = errors?.errors?.map((error) => {
    console.log(error);
    if (error?.path == "description") {
      return {
        errorCode: ERR_TASK_MANAGER_INVALID_DESCRIPTION,
        errorMessage: error?.msg,
      };
    } else if (error?.path == "title") {
      return {
        errorCode: ERR_TASK_MANAGER_INVALID_TITLE,
        errorMessage: error?.msg,
      };
    } else if (error?.path == "isComplete") {
      return {
        errorCode: ERR_TASK_MANAGER_INVALID_IS_COMPLETION,
        errorMessage: error?.msg,
      };
    } else if (error?.path == "taskID") {
      return {
        errorCode: ERR_TASK_MANAGER_INVALID_TASK_ID,
        errorMessage: error?.msg,
      };
    } else {
      return {
        errorCode: ERR_TASK_MANAGER_DEFAULT,
        errorMessage: error?.msg,
      };
    }
  });

  const errorResponse = {
    errorCount: errorResponses.length,
    description: "Please pass valid request,Go through the examples",
    errors: errorResponses,
  };

  return errorResponse;
};

const taskNotFound = {
  errorCode: ERR_TASK_MANAGER_TASK_NOT_FOUND,
  errorMessage: "TaskID passed in the request is not found",
};

module.exports = { handleValidationError, taskNotFound };

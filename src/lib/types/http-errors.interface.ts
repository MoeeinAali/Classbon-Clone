interface Problem {
    title: string;
    status: number;
    detail?: string;
    errors?: Record<string, string[]>;
}


interface BadRequestError extends Problem { kind: 'BadRequest' }
interface UnauthorizedError extends Problem { kind: 'Unauthorized' }
interface ValidationError extends Problem { kind: 'Validation' }
interface NotFoundError extends Problem { kind: 'NotFound' }
interface UnhandledException extends Problem { kind: 'Unhandled' }
interface NetworkError extends Problem { kind: 'Network' }


type ApiError =
    | BadRequestError
    | NetworkError
    | NotFoundError
    | UnhandledException
    | UnauthorizedError
    | ValidationError;


export type {
    Problem,
    BadRequestError,
    UnauthorizedError,
    ValidationError,
    NotFoundError,
    UnhandledException,
    NetworkError,
    ApiError
};
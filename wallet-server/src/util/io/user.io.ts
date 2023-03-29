
export interface CreateUserRequest extends Express.Request {
    body: {
        data: {
            email: string,
            ensAddress: string,
            password: string
        }
    }
}

export interface UpdateUserRequest extends Express.Request {
    params: {
        id: string,
    },
    body: {
        data: {
            email: string,
            ensAddress: string,
            password: string
        }
    }
}

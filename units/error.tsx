export const errorMessage = (message: string) => {
    switch (message) {
        case 'not_found':
            return 'Account not exits !!!'
        case 'password':
            return 'Password not match !!!'
        case 'email_exist':
            return 'Email have exist !!!'
        default:
            return 'Not found !!!'
    }
}

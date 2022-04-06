export class RealmModel {
    public client_id: string = "keycloakspringboot"
    public username: string = ""
    public password: string = ""
    public grant_type: string = "password"
}

export class RealmResponse {
    public access_token?: string
    public expires_in?: number
    public refresh_expires_in?: number
    public refresh_token?: string
    public token_type?: string
    public not_before_policy?: number
    public session_state?: number
    public scope?: string
    public error?: string
    public error_description?: string
}

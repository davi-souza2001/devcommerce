import { randomUUID } from 'node:crypto'

export interface UserProps {
    email: string
    name: string
    photo?: string
}

export class User {
    private _id: string
    private props: UserProps

    constructor(props: UserProps) {
        if (props.name.length === 0) {
            throw new Error('Name can not to be void.')
        }
        if (props.email.length === 0) {
            throw new Error('Email can not to be void.')
        }

        this._id = randomUUID()
        this.props = props
    }

    public get id(): string {
        return this._id
    }

    public set email(email: string) {
        this.props.email = email
    }

    public get email(): string {
        return this.props.email
    }

    public set name(name: string) {
        this.props.name = name
    }

    public get name(): string {
        return this.props.name
    }

    public set photo(photo: string) {
        this.props.photo = photo
    }

    public get photo(): string {
        return this.props.photo
    }
}
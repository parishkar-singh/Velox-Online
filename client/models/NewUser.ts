import {RegisterFormFields} from "@/models/interfaces/RegisterFormFields.interface";

export type NewUser = Omit<RegisterFormFields, 'confirmPassword'>

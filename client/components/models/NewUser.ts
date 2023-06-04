import {RegisterFormFields} from "@/components/models/RegisterFormFields.interface";

export type NewUser = Omit<RegisterFormFields, 'confirmPassword'>

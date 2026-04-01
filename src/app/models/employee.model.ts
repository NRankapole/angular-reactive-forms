export interface Employee {
    id: number,
    name: string,
    email: string,
    department: string,
    isActive: boolean,
    skills: string[],
    experiences: Experience[],
}

interface Experience {
    company : string,
    role: string,
    years:number
}
export interface IProfile {
    info: IInfo;
    reservation: IReservation[];
    tournaments: ITorunaments[];
    achievements: IAchievements[];
    teams: ITeams[];
    friends: IFriends[];
}

export interface IInfo {
    icon: string;
    name: string;
    full_name: string;
    status: boolean;
    tag: string;
    study_group: string;
    student_number: string;
    phone_number: string;
    social_media: ISocial
}

//social_media object interface
interface ISocial {
    discord: string;
    steam: string;
    vk: string;
}

export interface IReservation {
    date: string;
    name: string;
    pc_num: string;
    time: string;
}

export interface ITorunaments {
    date: string;
    name: string;
    status: string;
    img: string;
}

export interface IAchievements {
    img: string;
    name: string;
    description: string;
}

export interface ITeams {
    members_count: number;
    name: string;
    img: string;
}

export interface IFriends {
    name: string;
    full_name: string;
    img: string;
}
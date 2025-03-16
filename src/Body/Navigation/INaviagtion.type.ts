import React from "react";

export interface IMenuPath {
    title: string;
    icon?: React.ReactNode;
    path: string;
    subItems?: IMenuPath[];
}
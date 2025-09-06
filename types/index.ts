import React, { MouseEventHandler } from "react";

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface FilterProps {
    drive: string,
    fuel_type: string,
    make: string,
    model: string,
    transmission: string,
    year: number,
    class?: string,
    cylinders?: number,
    displacement?: number;
}

export interface ResultProps {
  model : string;
  transmission : string;
  make : string;
  year?: number;
}

export interface CarDetailsProps {
  result: ResultProps;
}

export type ProviderType = {
  children : React.ReactNode;
}

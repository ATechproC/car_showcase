import React, { ActionDispatch, Dispatch, MouseEventHandler, SetStateAction } from "react";

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
  model: string;
  transmission: string;
  make: string;
  year?: number;
  drive: string;
}

export interface CarDetailsProps {
  result: ResultProps;
}

export type ContainerProps = React.ComponentProps<"button">;

export type ProviderType = {
  children: React.ReactNode;
}

export interface CarProps {
  make: string;
  model: string;
  year: string;
}

export interface FilterBoxProps {
  value: CarProps
  setValue: Dispatch<React.SetStateAction<CarProps>>
}

export interface ListManufacturersProps {
  id: number;
  name: string;
}

export interface FormProps {
  inputValue: CarProps;
  dispatch: ActionDispatch<[{
    type: any;
    payload?: any;
  }]>
}

export interface OverlayProps {
    showList : "hidden" | "block";
    setShowList : Dispatch<SetStateAction<"hidden" | "block">>
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: HightlightFragemnt
// ====================================================

export interface HightlightFragemnt_background {
  __typename: "UploadFile";
  url: string;
}

export interface HightlightFragemnt_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface HightlightFragemnt {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HightlightFragemnt_background | null;
  floatImage: HightlightFragemnt_floatImage | null;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
  buttonLink: string;
  buttonLabel: string;
}

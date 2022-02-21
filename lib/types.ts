export type NotEmptyString = string & { readonly NotEmptyString: unique symbol };

export const NotEmptyString = {
  ofString: (value: string) => {
    if (!value) {
      throw new Error("Could not be empty");
    }

    return value as NotEmptyString;
  },
};
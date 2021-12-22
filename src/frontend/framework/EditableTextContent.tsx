import type { ReactNode } from "react";
import { Button, CircularProgress, TextFieldProps } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { CloseIcon } from "@frontend/framework/icons/CloseIcon";

type EditableTextContentProps<T> = {
  initialValue: T;
  children: ReactNode;
  label: string;
  id: string;
  classes?: {
    content?: string;
    label?: string;
    root?: string;
  };
  renderEditable: (props: RenderEditableProps<T>) => JSX.Element;
  mutationFn: (input: T) => Promise<void>;
};

export function EditableTextContent<
  T extends string | string[] | number | number[] = string
>({
  initialValue,
  children,
  classes = {},
  label,
  id,
  renderEditable,
  mutationFn,
}: EditableTextContentProps<T>) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const toggleEdit = useCallback(() => {
    setIsEditing((prev) => !prev);
  }, []);

  const handleChange: TextFieldProps["onChange"] = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleBlur: TextFieldProps["onBlur"] = useCallback(() => {
    toggleEdit();

    if (value === initialValue) {
      return;
    }
    setIsLoading(true);
    mutationFn(value as T)
      .then(() => {
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
        setValue(initialValue);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [initialValue, value, toggleEdit, mutationFn]);

  const containerClassName = classes.root || "";
  const labelClassName = classes.label || "";
  const contentClassName =
    "normal-case text-left justify-start p-1 min-w-0 " +
    (classes.content || "");

  return (
    <div className={containerClassName}>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>

      {isEditing ? (
        renderEditable({
          autoFocus: true,
          value: value as T,
          id,
          InputProps: {
            classes: {
              input: "py-1 text-sm",
              multiline: "py-1",
            },
          },
          onChange: handleChange,
          onBlur: handleBlur,
        })
      ) : (
        <Button
          color="inherit"
          onClick={toggleEdit}
          classes={{
            root: contentClassName,
          }}
        >
          {children}
          {isLoading && (
            <CircularProgress
              color="primary"
              size={14}
              thickness={5}
              classes={{ root: "ml-3" }}
            />
          )}
          {!isLoading && isError && (
            <CloseIcon className="w-4 h-4 ml-3 text-danger" />
          )}
        </Button>
      )}
    </div>
  );
}

export type RenderEditableProps<T> = {
  onChange: TextFieldProps["onChange"];
  onBlur: TextFieldProps["onBlur"];
  InputProps: TextFieldProps["InputProps"];
  autoFocus: boolean;
  value: T;
  id: string;
};

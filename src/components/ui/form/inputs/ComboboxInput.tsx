"use client";

import * as React from "react";
import { Check, ChevronsUpDown, PlusSquareIcon, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/PopOver";
import { Badge } from "@/components/ui/Badge";
import { SelectInputProps } from "@/lib/forms";

export default function ComboboxInput({ field, form, data }: SelectInputProps) {
  const { setFieldValue } = form;

  const [open, setOpen] = React.useState(false);
  const [addButton, setAddButton] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");

  const handleRemove = (value: string) => {
    // setSelectedValues((prev) => prev.filter((v) => v !== value));
    setFieldValue(
      field.name,
      field.value.filter((v: string) => v !== value),
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="mt-2 w-full justify-between"
        >
          {/* Selected Items */}
          <div className="flex max-w-[90%] gap-1 overflow-hidden overflow-x-scroll">
            {field.value.length > 0
              ? field.value.map((value: string) => (
                  <Badge key={value} variant="secondary" className="mr-1">
                    {data.find((d) => d.value === value)?.label}
                    <span
                      role="Button"
                      tabIndex={0}
                      className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleRemove(value);
                        }
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleRemove(value);
                      }}
                    >
                      <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                    </span>
                  </Badge>
                ))
              : `Select ${field.name}...`}
          </div>
          {/* Icon */}
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      {/* Content */}
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            placeholder={`Search ${field.name}...`}
            className="h-9 w-full"
            onKeyUp={(e) => {
              const inputValue = e.currentTarget.value;
              setSearchInput(inputValue);
              if (
                inputValue.trim() !== "" &&
                data.every((d) => d.label !== inputValue)
              ) {
                e.preventDefault();
                setAddButton(true);
              } else if (addButton) {
                setAddButton(false);
              }
            }}
          >
            {addButton ? (
              <Button
                className="aspect-square rounded-none hover:bg-transparent hover:text-green-400"
                size={"icon"}
                variant={"ghost"}
                aria-label="Add item"
                onClick={() => {
                  console.log(searchInput);
                }}
              >
                <PlusSquareIcon size={30} className="shrink-0 opacity-50" />
              </Button>
            ) : null}
          </CommandInput>
          <CommandList>
            <CommandEmpty>No {field.name} found.</CommandEmpty>
            <CommandGroup>
              {data.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => {
                    setFieldValue(
                      field.name,
                      field.value.includes(option.value)
                        ? field.value.filter(
                            (value: string) => value !== option.value,
                          )
                        : [...field.value, option.value],
                    );
                  }}
                >
                  {option.label}
                  <Check
                    className={cn(
                      "ml-auto h-4 w-4",
                      field.value.includes(option.value)
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

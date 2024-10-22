import React, {
  useState,
  forwardRef,
  ReactNode,
  useMemo,
  useEffect,
} from "react";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";
import { getTextEllipsis } from "@/lib/utils";

export type OptionProps = {
  value: string;
  label: string;
  icon?: ReactNode;
  description?: string;
};

export interface ListOptionProps {
  options: OptionProps[];
  selected: OptionProps[];
  handleClose?: () => void;
  handleSelect: (option: OptionProps | null) => void;
  handleScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  className?: string;
  optionHeight?: number;
}

const ListOption = forwardRef<HTMLDivElement, ListOptionProps>(
  (
    {
      options,
      selected,
      handleSelect,
      handleClose,
      handleScroll,
      className,
      optionHeight,
    },
    ref
  ) => {
    const [activeOptionIndex, setActiveOptionIndex] = useState<number>(-1);

    useEffect(() => {
      setActiveOptionIndex(
        options.findIndex((value) =>
          selected.some((item: OptionProps) => item === value)
        )
      );
    }, [selected, options]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveOptionIndex((prevIndex) =>
          prevIndex < options.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveOptionIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      } else if (event.key === "Enter") {
        event.preventDefault();
        if (activeOptionIndex >= 0 && activeOptionIndex < options.length) {
          handleSelect(options[activeOptionIndex]);
        } else {
          handleClose && handleClose();
        }
      } else if (event.key === "Escape") {
        event.preventDefault();
        handleClose && handleClose();
      }
    };

    const height = useMemo(() => {
      const optionsLength = options.length > 10 ? 10 : options.length;
      return optionsLength * (optionHeight ?? 44);
    }, [options, optionHeight]);

    return (
      <div
        ref={ref}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={clsx(
          className,
          "flex flex-col gap-1 w-full rounded-lg outline-none p-2"
        )}
      >
        {isEmpty(options) ? (
          <div className="flex flex-col w-full h-full gap-3 items-center justify-center text-muted-foreground font-bold">
            <p> No Data</p>
          </div>
        ) : (
          <div
            className="flex flex-col gap-1 "
            style={{ maxHeight: `${height}px`, overflowY: "auto" }}
            onScroll={handleScroll}
          >
            {options.map((option, index) => {
              const isSelected = selected.some(
                (item) => item?.value === option?.value
              );
              return (
                <div
                  key={index}
                  onClick={() => handleSelect(option)}
                  className={clsx(
                    `cursor-pointer hover:bg-muted-foreground/10 px-2 py-2 rounded-lg flex items-center gap-3`,
                    {
                      ["bg-muted-foreground/10"]:
                        index === activeOptionIndex || isSelected,
                    },
                    {
                      ["justify-center"]: typeof option.value === "number",
                    }
                  )}
                >
                  {option.icon}
                  <div>
                    {getTextEllipsis(option.label)}
                    <div className="text-muted-foreground text-xs">
                      {getTextEllipsis(option.description)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);
export default ListOption;

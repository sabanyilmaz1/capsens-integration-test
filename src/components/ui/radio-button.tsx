import Image from "next/image";

export const InlineRadioButton = ({
  item,
  accountType,
  setAccountType,
}: {
  item: { label: string; description: string; icon: string };
  accountType: string;
  setAccountType: (value: string) => void;
}) => {
  return (
    <label
      htmlFor={item.label}
      className={`flex justify-center items-center md:gap-12 gap-6 border rounded-lg xl:p-6 md:p-4 p-3 animation-hover
         ${
           accountType === item.label
             ? "border-primary-blue bg-tertiary-blue"
             : "border-grey"
         }`}
    >
      <input
        type="radio"
        id={item.label}
        name="account-type"
        className="w-[22px] h-[22px]"
        value={item.label}
        checked={accountType === item.label}
        onChange={(e) => setAccountType(e.target.value)}
      />
      <div className="flex items-center md:gap-6 gap-3 w-full">
        <Image
          src={item.icon}
          alt={item.label}
          width={30}
          height={35}
          className="md:w-[30px] md:h-[35px] w-6 h-6"
        />
        <div className="w-full">
          <p
            className={`font-semibold md:text-base text-sm mb-1 ${
              accountType === item.label ? "text-primary-blue" : "text-black"
            }`}
          >
            {item.label}
          </p>
          <p
            className={`md:text-base text-sm ${
              accountType === item.label ? "text-primary-blue" : "text-gray-500"
            }`}
          >
            {item.description}
          </p>
        </div>
      </div>
    </label>
  );
};

export const CardRadioButton = ({
  item,
  accountType,
  setAccountType,
}: {
  item: { label: string; description: string; icon: string };
  accountType: string;
  setAccountType: (value: string) => void;
}) => {
  return (
    <label
      htmlFor={item.label}
      className={`flex-1 flex flex-col justify-center md:gap-6 gap-4 items-center border rounded-lg 
        xl:p-6 xl:pb-4 md:p-4 md:pb-6 p-3 animation-hover 
        ${
          accountType === item.label
            ? "border-primary-blue bg-tertiary-blue"
            : "border-grey"
        }`}
    >
      <input
        type="radio"
        id={item.label}
        name="account-type"
        className="w-[22px] h-[22px]"
        value={item.label}
        checked={accountType === item.label}
        onChange={(e) => setAccountType(e.target.value)}
      />
      <div className="flex flex-col items-center gap-1 xl:gap-4 md:gap-2">
        <Image
          src={item.icon}
          alt={item.label}
          width={33}
          height={33}
          className="md:w-8 md:h-8 w-6 h-6"
        />
        <div className="flex flex-col items-center gap-1">
          <p
            className={`font-semibold md:text-base text-sm ${
              accountType === item.label ? "text-primary-blue" : "text-black"
            }`}
          >
            {item.label}
          </p>
          <p
            className={`md:text-base text-sm ${
              accountType === item.label ? "text-primary-blue" : "text-gray-500"
            }`}
          >
            {item.description}
          </p>
        </div>
      </div>
    </label>
  );
};

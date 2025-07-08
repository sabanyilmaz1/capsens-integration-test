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
      className={`flex justify-center items-center gap-12 border rounded-lg xl:p-6 md:p-4 p-2 ${
        accountType === item.label
          ? "border-primary-blue bg-tertiary-blue"
          : "border-grey"
      }`}
    >
      <input
        type="radio"
        id={item.label}
        name="account-type"
        className="w-5 h-5"
        value={item.label}
        checked={accountType === item.label}
        onChange={(e) => setAccountType(e.target.value)}
      />
      <div className="flex items-center gap-6 w-full">
        <Image src={item.icon} alt={item.label} width={30} height={35} />
        <div className="w-full">
          <p className="font-semibold">{item.label}</p>
          <p className="text-sm text-gray-500">{item.description}</p>
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
      className={`flex-1 flex flex-col justify-center gap-6 items-center border rounded-lg xl:p-6 md:p-4 p-2 ${
        accountType === item.label
          ? "border-primary-blue bg-tertiary-blue"
          : "border-grey"
      }`}
    >
      <input
        type="radio"
        id={item.label}
        name="account-type"
        className="w-5 h-5"
        value={item.label}
        checked={accountType === item.label}
        onChange={(e) => setAccountType(e.target.value)}
      />
      <div className="flex flex-col items-center gap-1">
        <Image src={item.icon} alt={item.label} width={33} height={33} />
        <p className="font-semibold">{item.label}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
    </label>
  );
};

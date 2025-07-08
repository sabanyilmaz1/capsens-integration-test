"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { CardRadioButton, InlineRadioButton } from "../ui/radio-button";
import Image from "next/image";

export const radioData = [
  {
    label: "Personne physique",
    description: "Vous créez ce compte pour vous-même en tant qu’individu",
    icon: "/icons/user-profil.svg",
  },
  {
    label: "Association",
    description: "Personne morale",
    icon: "/icons/building.svg",
  },
  {
    label: "Entreprise",
    description: "Personne morale",
    icon: "/icons/building.svg",
  },
  {
    label: "Micro Entreprise",
    description: "Personne morale",
    icon: "/icons/building.svg",
  },
];

export const Form = () => {
  const [accountType, setAccountType] = useState(radioData[0].label);
  return (
    <div className="md:py-12">
      <section className="md:max-w-[1200px] 2xl:p-12 md:p-8 p-6 w-full mx-auto border border-primary-blue rounded-lg bg-white text-black">
        <div className="flex flex-col 2xl:gap-4 gap-2">
          <h1 className="font-semibold 2xl:text-[39px] lg:text-[32px] text-2xl leading-14 tracking-[-2px]">
            Je crée mon compte{" "}
            <span className="text-primary-blue">en tant que ...</span>
          </h1>
          <h2 className="text-sm black">
            Choisissez dès maintenant si vous souhaitez investir en tant que
            particulier ou en tant que personne morale.
          </h2>
        </div>
        {/* Radio buttons */}
        <form className="2xl:mt-12 mt-8 flex flex-col 2xl:gap-8 gap-6">
          {/* First Radio button */}
          <InlineRadioButton
            item={radioData[0]}
            accountType={accountType}
            setAccountType={setAccountType}
          />
          {/* Ou section */}
          <div className="flex items-center gap-4">
            <hr className="w-full border-grey" />
            <h3 className="text-sm font-semibold text-black">Ou</h3>
            <hr className="w-full border-grey" />
          </div>
          {/* Three Radio buttons */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {radioData.slice(1, 4).map((item) => (
              <CardRadioButton
                key={item.label}
                item={item}
                accountType={accountType}
                setAccountType={setAccountType}
              />
            ))}
          </div>
          <Button>
            Suivant
            <Image
              src="/icons/arrow.svg"
              alt="arrow"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </Button>
        </form>
      </section>
    </div>
  );
};

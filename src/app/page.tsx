"use client";
import ConnectButton from "./comps/W3Button";
export default function Home() {
  const abi = [
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ];

  return (
    <main className="container mx-auto pt-5">
      <div className="flex justify-end">
        <ConnectButton></ConnectButton>
      </div>
    </main>
  );
}

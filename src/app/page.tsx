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
    <main>
      <ConnectButton></ConnectButton>
    </main>
  );
}

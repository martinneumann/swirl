import TokenItem from "./TokenItem";

export const TokensList = ({ tokens }: { tokens: any }) => {
  return (
    <div className="mb-10">
      <div className="hidden lg:grid grid-cols-5 items-end border-b-1 pb-4">
        <h3 className="col-span-2 font-semibold">Token Name</h3>
        <h3 className="col-span-1 font-semibold">Value</h3>
        <h3 className="col-span-2 font-semibold">Description</h3>
      </div>
      {tokens.map((token: any) => {
        return (
          <div key={token.name}>
            <TokenItem
              tokenName={{
                codePreview: "border-radius: 123px",
                tokenPreview: "background-default",
              }}
              value="rgba(246, 246, 247, 1) "
              description="Nunc rhoncus sed pulvinar sit lectus pellentesque fusce convallis vitae. "
            />
          </div>
        );
      })}
    </div>
  );
};

export default TokensList;

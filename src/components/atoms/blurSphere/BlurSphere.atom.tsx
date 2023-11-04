const BlurSphere = ({ className = "" }: { className?: string }) => {
  return (
    <div
      data-testis={`blurred-sphere`}
      className={`absolute w-[341px] h-[341px] bg-fuchsia-600 rounded-full blur-[200px] ${className}`}
    />
  );
};

export default BlurSphere;


interface labelAndIconProps {
    iconSrc: string,
    label: string,
    width?: string;
    height?: string;
}

export default function LabelAndIcon({ iconSrc, label, width = "50%", height = "50%" }: labelAndIconProps) {
  return (
    <>
      <div className="flex flex-1 items-center px-8 justify-between rounded-3xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-2">
        <h3 className="text-3xl font-secular text-start mt-auto mb-auto">{label}</h3>
        <div className="flex my-3 w-[17%] aspect-square bg-[#61DAFF] rounded-xl justify-center items-center">
          <img src={iconSrc} alt="" className={`w-[${width}] h-[${height}]`} />
        </div>
      </div>
    </>
  );
}

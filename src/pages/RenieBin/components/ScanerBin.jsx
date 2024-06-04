import TwoColLeftImg from "../../../components/TwoColLeftImg";
import bar from "../../../assets/images/bar.webp";
const Scaner = () => {
  return (
    <div>
      <TwoColLeftImg bgColor="#4765E61A" url={bar}>
        <div className="cmd:px-5">
          <span className="text-[#4765E6] font-semibold text-[25px] cmd:text-[35px] leading-[35px] block cmd:inline text-center">
            High Performance
          </span>
          <br />
          <span className="gradient-text font-black text-[35px] cmd:text-[45px] leading-[45px] block cmd:inline text-center">
            Barcode Scanner
          </span>
          <br />
          <br />
          <span className="gradient-text font-semibold text-[25px] cmd:text-[35px] leading-[35px] block cmd:inline text-center ">
            Ultra fast waste verification process
          </span>
          <p className="my-3 text-center cmd:text-left">
            The embedded barcode scanner ensures precise identification and
            categorization of waste items. The scanner reads barcodes on
            disposed items, streamlining the recycling process and enhancing
            data accuracy. It’s not just smart; it’s efficient, aiding in our
            mission to make waste disposal more sustainable and profitable.
          </p>
        </div>
      </TwoColLeftImg>
    </div>
  );
};

export default Scaner;

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Connect({text}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <button
      className="headerButton text-white text-[13px] lg:text-[15px] cmxl:text-[18px] cxl:text-xl whitespace-pre "
      data-cal-namespace=""
      data-cal-link="renie-connect/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      {
        text ? text : 'Connect with an expert'
      }
    </button>
  );
}

import React, {useEff} from "react";
import { useRecoilState } from "recoil";
import { activeSection, savedSection, testId } from "@/store/Section";
import { useForm, useWatch } from "react-hook-form";
import html2canvas from "html2canvas";
import { Section4DataStore } from "@/store/FormData";

export default function Section4() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = () => {
    setCurrentActiveSection(6);
    setSavedSectionCount(5);
  };

  const [section4FormData, setSection4FormData] =
    useRecoilState(Section4DataStore);

  const [testIdResponse, setTestIdResponse] = useRecoilState(testId);

  const { register, handleSubmit, setValue, control } = useForm();

  const watchedFields = useWatch({ control });
  const onSubmit = async (data) => {
    console.log("This is section 4 data");
    console.log(section4FormData);
    const section = document.getElementById("section4-form");
    const canvas = await html2canvas(section);
    const imgData = canvas.toDataURL("image/png");

    // Convert the base64 image data to a blob
    const blob = await (await fetch(imgData)).blob();

    // Use the File System Access API to save the file
    if ("showSaveFilePicker" in window) {
      try {
        const fileHandle = await window.showSaveFilePicker({
          suggestedName: testId + "" + "section4-form.png",
          types: [
            {
              description: "PNG Image",
              accept: { "image/png": [".png"] },
            },
          ],
        });

        const writableStream = await fileHandle.createWritable();
        await writableStream.write(blob);
        await writableStream.close();
        console.log("Image saved successfully");
        handleSectionMove();
      } catch (error) {
        console.error("Save operation was cancelled or failed:", error);
      }
    } else {
      alert("Your browser does not support the File System Access API.");
    }
  };

  useEffect(() => {
    if (section4FormData && Object.keys(section4FormData).length > 0) {
      Object.keys(section4FormData).forEach((field) => {
        setValue(field, section4FormData[field]);
      });
    }
  }, [setSection4FormData, setValue]);

  useEffect(() => {
    setSection4FormData(watchedFields);
  }, [watchedFields, setSection4FormData]);

  return (
    <div className="form-section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="toggle-table">
          <tbody>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-1" className="field-label">
                  IPX5 sticket with QA Sign
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-1"
                  className="toggle-input"
                  {...register("field57")}
                />
                <label htmlFor="toggle-1-1" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-2" className="field-label">
                  HV test availability
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-2"
                  className="toggle-input"
                  {...register("field58")}
                />
                <label htmlFor="toggle-1-2" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-3" className="field-label">
                  DANGER STICKER as per the Motor Voltage
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-3"
                  className="toggle-input"
                  {...register("field59")}
                />
                <label htmlFor="toggle-1-3" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-4" className="field-label">
                  Rotate the hand crank and check the raise and lower direction
                  symbol
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-4"
                  className="toggle-input"
                  {...register("field60")}
                />
                <label htmlFor="toggle-1-4" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-5" className="field-label">
                  Phase sequences attention sticker
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-5"
                  className="toggle-input"
                  {...register("field61")}
                />
                <label htmlFor="toggle-1-5" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-6" className="field-label">
                  Proximity wiring shorting stickers
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-6"
                  className="toggle-input"
                  {...register("field62")}
                />
                <label htmlFor="toggle-1-6" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-7" className="field-label">
                  Hand revolution sticker
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-7"
                  className="toggle-input"
                  {...register("field63")}
                />
                <label htmlFor="toggle-1-7" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-8" className="field-label">
                  CAM switch stickers as per legend
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-8"
                  className="toggle-input"
                  {...register("field64")}
                />
                <label htmlFor="toggle-1-8" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-9" className="field-label">
                  ADS wire stickers/labels
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-9"
                  className="toggle-input"
                  {...register("field65")}
                />
                <label htmlFor="toggle-1-9" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-10" className="field-label">
                  Electrical Limit switch stickets
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-10"
                  className="toggle-input"
                  {...register("field66")}
                />
                <label htmlFor="toggle-1-10" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-11" className="field-label">
                  Mechanical limit switch stickers
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-11"
                  className="toggle-input"
                  {...register("field67")}
                />
                <label htmlFor="toggle-1-11" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1-12" className="field-label">
                  Earthling sticker at both the sides near earth bolt
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1-12"
                  className="toggle-input"
                  {...register("field68")}
                />
                <label htmlFor="toggle-1-12" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="action-button">
          Save & Next
        </button>
      </form>
    </div>
  );
}

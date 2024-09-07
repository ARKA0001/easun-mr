import React from "react";
import moveSection from "@/utils/SectionMove";
import { useRecoilState } from "recoil";
import { activeSection, savedSection } from "@/store/Section";
import { useForm } from "react-hook-form";
import html2canvas from "html2canvas";

export default function Section3() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = () => {
    setCurrentActiveSection(5);
    setSavedSectionCount(4);
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("This is section 3 data");
    const section3Data = {
      field43: data.field43,
      field44: data.field44,
      field45: data.field45,
      field46: data.field46,
      field47: data.field47,
      field48: data.field48,
      field49: data.field49,
      field50: data.field50,
      field51: data.field51,
      field52: data.field52,
      field53: data.field53,
      field54: data.field54,
      field55: data.field55,
      field56: data.field56,
    };

    console.log(section3Data);

    handleCapture();

    const handleCapture = async () => {
      const section = document.getElementById("section3-form");
      const canvas = await html2canvas(section);
      const imgData = canvas.toDataURL("image/png");

      // Convert the base64 image data to a blob
      const blob = await (await fetch(imgData)).blob();

      // Use the File System Access API to save the file
      if ("showSaveFilePicker" in window) {
        try {
          const fileHandle = await window.showSaveFilePicker({
            suggestedName: "section3-form.png",
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

    // handleSectionMove();
  };

  return (
    <div className="form-section" id="section3-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="toggle-table">
          <tbody>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-1" className="field-label">
                  DM Counter reading minimum 500 endurance operation before
                  start
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-1"
                  className="toggle-input"
                  {...register("field43")}
                />
                <label htmlFor="toggle-1" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-2" className="field-label">
                  Hand crank provided inside the DM with paint shade matching
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-2"
                  className="toggle-input"
                  {...register("field44")}
                />
                <label htmlFor="toggle-2" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-3" className="field-label">
                  Earth bride provided between DM & DOOR
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-3"
                  className="toggle-input"
                  {...register("field45")}
                />
                <label htmlFor="toggle-3" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-4" className="field-label">
                  Availablity of Scheme and Pouch
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-4"
                  className="toggle-input"
                  {...register("field46")}
                />
                <label htmlFor="toggle-4" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-4" className="field-label">
                  Availablity of Hand crank with Spring dowel
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-5"
                  className="toggle-input"
                  {...register("field47")}
                />
                <label htmlFor="toggle-5" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-6" className="field-label">
                  Function of DOOR lock with PAD
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-6"
                  className="toggle-input"
                  {...register("field48")}
                />
                <label htmlFor="toggle-6" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-7" className="field-label">
                  Avalability of top flange shaft "o" Ring, Gaurd, Pouch
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-7"
                  className="toggle-input"
                  {...register("field49")}
                />
                <label htmlFor="toggle-7" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-8" className="field-label">
                  No any spillage of wire sleeve, copper strings and dust,
                  uellow paint and any
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-8"
                  className="toggle-input"
                  {...register("field50")}
                />
                <label htmlFor="toggle-8" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-9" className="field-label">
                  Earth bolt provided on both directions
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-9"
                  className="toggle-input"
                  {...register("field51")}
                />
                <label htmlFor="toggle-9" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-10" className="field-label">
                  Gland plate matching with uniform paint
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-10"
                  className="toggle-input"
                  {...register("field52")}
                />
                <label htmlFor="toggle-10" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-11" className="field-label">
                  Terminal block transparent protection cover provided for Stud
                  and Nut Type
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-11"
                  className="toggle-input"
                  {...register("field53")}
                />
                <label htmlFor="toggle-11" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-12" className="field-label">
                  Push button alignment
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-12"
                  className="toggle-input"
                  {...register("field54")}
                />
                <label htmlFor="toggle-12" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-13" className="field-label">
                  Window glass & gasket seated properrly
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-13"
                  className="toggle-input"
                  {...register("field55")}
                />
                <label htmlFor="toggle-13" className="toggle-label">
                  <span className="toggle-switch"></span>
                  <span className="toggle-text on">Yes</span>
                  <span className="toggle-text off">No</span>
                </label>
              </td>
            </tr>
            <tr>
              <td className="user-input user-toggle">
                <label htmlFor="toggle-14" className="field-label">
                  Whote spiral sleeves provided on all the wire bunches
                </label>
              </td>
              <td className="toggle-container">
                <input
                  type="checkbox"
                  id="toggle-14"
                  className="toggle-input"
                  {...register("field56")}
                />
                <label htmlFor="toggle-14" className="toggle-label">
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

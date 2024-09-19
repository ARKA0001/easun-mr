import React, {useEffect} from "react";
import { useRecoilState } from "recoil";
import { activeSection, savedSection } from "@/store/Section";
import { useForm, useWatch } from "react-hook-form";
import html2canvas from "html2canvas";
import { Section3DataStore } from "@/store/FormData";

export default function Section3() {
  const [currentActiveSection, setCurrentActiveSection] =
    useRecoilState(activeSection);

  const [savedSectionCount, setSavedSectionCount] =
    useRecoilState(savedSection);

  const handleSectionMove = () => {
    setCurrentActiveSection(5);
    setSavedSectionCount(4);
  };

  const [section3FormData, setSection3FormData] =
    useRecoilState(Section3DataStore);
  const { register, handleSubmit, setValue, control } = useForm();
  const watchedFields = useWatch({ control });

  const onSubmit = async (data) => {
    console.log("This is section 3 data");
    console.log(section3FormData);
    const section = document.getElementById("section3-form");
    const canvas = await html2canvas(section);
    const imgData = canvas.toDataURL("image/png");
    const blob = await (await fetch(imgData)).blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${testId ? testId : 'default'}-section3-form.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    console.log("Image saved successfully");
  };

  useEffect(() => {
    if (section3FormData && Object.keys(section3FormData).length > 0) {
      Object.keys(section3FormData).forEach((field) => {
        setValue(field, section3FormData[field]);
      });
    }
  }, [setSection3FormData, setValue]);

  useEffect(() => {
    setSection3FormData(watchedFields);
  }, [watchedFields, setSection3FormData]);

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

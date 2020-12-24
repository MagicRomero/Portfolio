import data from "../../../data/projects.json";

export default async (req, res) => {
  try {
    return res.status(200).json({ success: true, projects: data["projects"] });
  } catch (error) {
    return res.status(501).json({
      success: "false",
      error,
    });
  }
};

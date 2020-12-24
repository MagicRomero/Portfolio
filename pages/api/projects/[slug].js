import data from "../../../data/projects.json";

export default async (req, res) => {
  try {
    console.log(req);
    const project = data["projects"][req.query.slug];

    if (project) {
      return res.status(200).json({ success: true, project });
    }

    return res.status(404).json({ success: false, error: `Project not found` });
  } catch (error) {
    return res.status(501).json({
      success: "false",
      error,
    });
  }
};

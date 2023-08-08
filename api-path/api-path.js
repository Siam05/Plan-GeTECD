var host = "https://api.catchbangladesh.com";

const V1API = {
  // slider
  get_slider_images: host + "/api/home/slider",

  // about
  get_about_us: host + "/api/aboutus/view",

  // client
  get_client: host + "/api/client/",
  get_client_logo: host + "/api/client/logo",
  get_client_bg: host + "/api/home/client-bg/",

  // service
  get_services_list: host + "/api/services/",

  // review 
  get_reviews_list: host + "/api/reviews/",

  // team 
  get_team_list: host + "/api/team/",

  // site settings
  get_site_settings: host + "/api/home/settings/",

  // company overview
  get_company_overview: host + "/api/home/company-overview/",

  // Case Studies
  get_case_studies: host + "/api/case/",
  get_case_studies_details: host + "/api/case/detail/",
  get_case_category: host + "/api/case/category/",
  get_cases_by_category: host + "/api/case/by-category/",

  // Projects
  get_categories: host + "/api/category/",
  get_projects: host + "/api/projects/",
  get_projects_by_category: host + "/api/projects/by-category/",
  get_project_details: host + "/api/projects/details/",

  // Gallery
  get_gallery_categories: host + "/api/gallery/category/",
  get_gallery_list: host + "/api/gallery/",
  get_gallery_by_category: host + "/api/gallery/by-category/",
  get_gallery_details: host + "/api/gallery/detail/",

  // Message
  create_contact_message: host + "/api/contact/create/",

  // Career 
  get_job_post: host + "/api/jobs/position",
  get_job_post_details: host + "/api/jobs/position/",
  create_job_application: host + "/api/jobs/applications/create"
};

export default V1API;

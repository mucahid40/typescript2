import { JsonController, Get, Param } from "routing-controllers";
import pagesById, { Page } from "./data";

type PageList = { pages: Page[] };

// this makes sure a class is marked as controller that always returns JSON
// perfect for our REST API
@JsonController()
export default class PageController {
  @Get("/pages")
  allPages(): PageList {
    return { pages: Object.values(pagesById) };
  }
  // this markes a method as endpoint
  // in this case it responds to any GET /pages/:id
  // request with :id being a variable parameter
  @Get("/pages/:id")

  // this decorator retrieves the ID parameter from the url
  getPage(@Param("id") id: number): Page {
    return pagesById[id];
  }
}

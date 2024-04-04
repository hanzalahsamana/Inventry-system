import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Badge, UncontrolledTooltip, Input } from "reactstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// import {
//   fetchTickets,
//   DeleteTicket,
//   SearchTicket,
// } from "../../store/apps/ticket/TicketSlice";
import Data from "../../assets/images/Svg/ui-ux.svg";

const TicketListing = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchTickets());
  // }, [dispatch]);

  // const getVisibleTickets = (tickets, filter, ticketSearch) => {
  //   switch (filter) {
  //     case "total_tickets":
  //       return tickets.filter(
  //         (c) =>
  //           !c.deleted &&
  //           c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
  //       );

  //     case "Pending":
  //       return tickets.filter(
  //         (c) =>
  //           !c.deleted &&
  //           c.Status === "Pending" &&
  //           c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
  //       );

  //     case "Closed":
  //       return tickets.filter(
  //         (c) =>
  //           !c.deleted &&
  //           c.Status === "Closed" &&
  //           c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
  //       );

  //     case "Open":
  //       return tickets.filter(
  //         (c) =>
  //           !c.deleted &&
  //           c.Status === "Open" &&
  //           c.ticketTitle.toLocaleLowerCase().includes(ticketSearch)
  //       );

  //     default:
  //       throw new Error(`Unknown filter: ${filter}`);
  //   }
  // };

  // const tickets = useSelector((state) =>
  //   getVisibleTickets(
  //     state.ticketReducer.tickets,
  //     state.ticketReducer.currentFilter,
  //     state.ticketReducer.ticketSearch
  //   )
  // );

  return (
    <div>
      <div className="col-lg-3 mb-4">
        <Input
          type="text"
          // onChange={(e) => dispatch(SearchTicket(e.target.value))}
          placeholder="Search Ticket..."
        />
      </div>
      <Table className="align-middle">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Item name</th>
            <th>Sku</th>
            <th>Price</th>
            <th>Inventory</th>
            <th>Fullfilment</th>
            <th>Status</th>
            <th>Last modified</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <img src={Data} width={"20px"} height={"20px"} />
            </td>
            <td>Icon</td>
            <td>WFS-1494095</td>
            <td>$10.00</td>
            <td>0</td>
            <td>Seller fullfilled(WFS Eligible)</td>
            <td>Published</td>
            <td>4/4/2024</td>
            <td style={{cursor:"pointer"}}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Stock is very low</Tooltip>}
              >
                <i
                  class="bi bi-exclamation-triangle-fill"
                  style={{ color: "red" }}
                ></i>
              </OverlayTrigger>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <img src={Data} width={"20px"} height={"20px"} />
            </td>
            <td>Icon</td>
            <td>WFS-1494095</td>
            <td>$10.00</td>
            <td>0</td>
            <td>Seller fullfilled(WFS Eligible)</td>
            <td>Published</td>
            <td>4/4/2024</td>
            <td style={{cursor:"pointer"}}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Stock is very low</Tooltip>}
              >
                <i
                  class="bi bi-exclamation-triangle-fill"
                  style={{ color: "red" }}
                ></i>
              </OverlayTrigger>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <img src={Data} width={"20px"} height={"20px"} />
            </td>
            <td>Icon</td>
            <td>WFS-1494095</td>
            <td>$10.00</td>
            <td>0</td>
            <td>Seller fullfilled(WFS Eligible)</td>
            <td>Published</td>
            <td>4/4/2024</td>
            <td style={{cursor:"pointer"}}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Stock is very low</Tooltip>}
              >
                <i
                  class="bi bi-exclamation-triangle-fill"
                  style={{ color: "red" }}
                ></i>
              </OverlayTrigger>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <img src={Data} width={"20px"} height={"20px"} />
            </td>
            <td>Icon</td>
            <td>WFS-1494095</td>
            <td>$10.00</td>
            <td>0</td>
            <td>Seller fullfilled(WFS Eligible)</td>
            <td>Published</td>
            <td>4/4/2024</td>
            <td style={{cursor:"pointer"}}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-top">Stock is very low</Tooltip>}
              >
                <i
                  class="bi bi-exclamation-triangle-fill"
                  style={{ color: "red" }}
                ></i>
              </OverlayTrigger>
            </td>
          </tr>
          {/* {tickets.map((ticket) => (
            <tr key={ticket.Id}>
              <td>{ticket.Id}</td>
              <td>
                <h5 className="mb-0 mt-2">
                  <Link to="/tickt/ticket-detail" className="text-dark text-decoration-none">
                    {ticket.ticketTitle}
                  </Link>
                </h5>
                <small className="text-muted d-block text-truncate mb-2" style={{ width: '300px' }}>
                  {ticket.ticketDescription}
                </small>
              </td>
              <td>
                <Badge color={ticket.Label}>{ticket.Status}</Badge>
              </td>
              <td>{ticket.AgentName}</td>
              <td>{ticket.Date}</td>
              <td>
                <i
                  className="bi bi-trash cursor-pointer"
                  id="TooltipExample"
                  onClick={() => dispatch(DeleteTicket(ticket.Id))}
                />
                <UncontrolledTooltip placement="left" target="TooltipExample">
                  Delete
                </UncontrolledTooltip>
              </td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </div>
  );
};

export default TicketListing;

import { Request, Response } from "express";
import prisma from "../lib/prisma";

export const identifyPerson = async (req: Request, res: Response) => {
  try {
    console.log("hello!!");
    const { phoneNumber, email, linkPrecedence } = req.body;

    if (!phoneNumber && !email) {
      return res.status(400).json({
        message: "phoneNumber or email is required",
      });
    }

    const contact = await prisma.contact.create({
      data: {
        phoneNumber: phoneNumber || null,
        email: email || null,
        linkPrecedence: linkPrecedence || "primary",
      },
    });

    return res.status(201).json(contact);
  } catch (error) {
    console.error("Error creating contact:", error);

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

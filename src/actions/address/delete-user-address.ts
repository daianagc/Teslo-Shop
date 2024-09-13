"use server";

import prisma from "@/lib/prisma";

export const deleteUserAddress = async (userId: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const deleted = await prisma.userAddress.delete({
      where: { userId },
    });

    return { ok: true };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "No se pudo eliminar la direccion",
    };
  }
};

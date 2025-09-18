"use client"

import { PricingTable as ClerkPricingTable } from "@clerk/nextjs"

export const PricingTable = () => {
    return(
        <div className="flex flex-col items-center justify-center gap-y-4">
            <ClerkPricingTable 
             forOrganizations
             appearance={{
              variables: {
              colorPrimary: "#6D28D9",     //  sets button background
                      },
                elements: {
                    pricingTableCard: "shadow-none! border! rounded-lg!",
                    pricingTableCardHeader:"bg-background!",
                    pricingTableCardBody:"bg-background!",
                    pricingTableCardFooter:"bg-background!",
                }
             }}
             />
        </div>
    )
};

export class Company {

    constructor(
        public CompanyId?: number,
        public Name?: string,
        public AddressLine1?: string,
        public AddressLine2?: string,
        public Street?: string,
        public County?: string,
        public Country?: string,
        public Postcode?: string,
        public PrimaryColor?: string,
        public SecondaryColor?: string,
        public BrandLogoUrl?:string
    ) { }

}
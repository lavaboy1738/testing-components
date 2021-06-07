export enum Role {
    SPENDER = 'spender',
    ADMIN = 'admin',
    PRIMARY_ADMIN = 'primaryadmin',
    UNDEFINED = 'undefined',
}

export enum ExportStatus {
	NOT_EXPORTED,
	QBO_EXPORTED,
	XERO_EXPORTED,
	CSV_EXPORTED,
}

export type MockTransaction = {
    id: string,
    vendor: string,
    date: string,
    method: string,
    amount: number,
    gl: boolean,
    tx: boolean,
    receipt: boolean,
    export: ExportStatus
}

export const data: MockTransaction[] = [
    {
        id: "qwer-1ewqsa-dsad",
        vendor: "amazon",
        date: "June 7th",
        method: "1234567",
        amount: 10000,
        gl: true,
        tx: false,
        receipt: false,
        export: ExportStatus.CSV_EXPORTED
    },
    {
        id: "qwer-123rsa-dsad",
        vendor: "amazon",
        date: "June 7th",
        method: "1234567",
        amount: 10000,
        gl: true,
        tx: false,
        receipt: false,
        export: ExportStatus.NOT_EXPORTED
    },
    {
        id: "qwer-14grdssa-dsad",
        vendor: "amazon",
        date: "June 7th",
        method: "1234567",
        amount: 10000,
        gl: true,
        tx: false,
        receipt: false,
        export: ExportStatus.QBO_EXPORTED
    },
    {
        id: "qwer-145fdssa-dsad",
        vendor: "amazon",
        date: "June 7th",
        method: "1234567",
        amount: 10000,
        gl: true,
        tx: false,
        receipt: false,
        export: ExportStatus.XERO_EXPORTED
    },
    {
        id: "qwer-gdfrsa-dsad",
        vendor: "amazon",
        date: "June 7th",
        method: "1234567",
        amount: 10000,
        gl: true,
        tx: false,
        receipt: false,
        export: ExportStatus.NOT_EXPORTED
    },
    {
        id: "qwer-1fdsvcsa-dsad",
        vendor: "amazon",
        date: "June 7th",
        method: "1234567",
        amount: 10000,
        gl: true,
        tx: false,
        receipt: false,
        export: ExportStatus.QBO_EXPORTED
    },
    {
        id: "qwer-1qcvxzsa-dsad",
        vendor: "amazon",
        date: "June 7th",
        method: "1234567",
        amount: 10000,
        gl: true,
        tx: false,
        receipt: false,
        export: ExportStatus.CSV_EXPORTED
    }
]
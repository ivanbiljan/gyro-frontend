export interface PaginatedRequest {
    page: number;
    pageSize: number;

    /**
     * A comma-separated list of criterions. These strings should be constructed using the CriterionString type.
     */
    sortCriteria?: string;
}

export enum SortDirection {
    Ascending = 1,
    Descending = 2,
}

export interface SortCriterion {
    sortColumn: string;
    sortDirection: SortDirection;
}

export class CriteriaString {
    private _criteria: SortCriterion[];

    private constructor(criteria: SortCriterion[]) {
        this._criteria = criteria;
    }

    public static from(...criteria: SortCriterion[]): CriteriaString {
        return new CriteriaString(criteria);
    }

    public toString = (): string => {
        const transformedCriteria = this._criteria.map(
            c => `${c.sortDirection == SortDirection.Descending ? "-" : ""}${c.sortColumn}`
        );

        return transformedCriteria.join(",");
    };
}

export interface RequestConfig {
    successMessage?: string;
    errorMessage?: string;
}

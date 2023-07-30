import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Card } from 'primereact/card'

type Props = {
	children: ReactNode
};

export default function CssTableWrapper({children}: Props)
{
	return (
		<Card style={{ border: '1px solid #dadce0', boxShadow: 'none'}}>
			<CssDataTableWrapper>
				{children}
			</CssDataTableWrapper>
		</Card>
	)
}

const CssDataTableWrapper = styled.div`
  .p-column-header-content {
    justify-content: center;
  }

  .p-datatable-tbody > tr > td[role="cell"] {
    text-align: center;
  }

  .p-datatable-tbody > tr > td[role="cell"] > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

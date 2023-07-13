import React from 'react';
import FormTop from './FormTop';
import Applicant from './Applicant';
import WarrantyInformation from './WarrantyInformation';
import Beneficiary from './Beneficiary';
import FormBottom from './FormBottom';

function CustomForm() {
  return (
    <section className="padding-x padding-y max-width">
      <form>
        <FormTop />
        <Applicant />
        <WarrantyInformation />
        <Beneficiary />
        <FormBottom />
      </form>
    </section>
  );
}

export default CustomForm;

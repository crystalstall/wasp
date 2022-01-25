// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0

// (Re-)generated by schema tool
// >>>> DO NOT CHANGE THIS FILE! <<<<
// Change the json schema instead

#![allow(dead_code)]

use std::ptr;

use wasmlib::*;

use crate::consts::*;
use crate::params::*;
use crate::results::*;

pub struct ArrayAppendCall {
	pub func: ScFunc,
	pub params: MutableArrayAppendParams,
}

pub struct ArrayClearCall {
	pub func: ScFunc,
	pub params: MutableArrayClearParams,
}

pub struct ArraySetCall {
	pub func: ScFunc,
	pub params: MutableArraySetParams,
}

pub struct MapClearCall {
	pub func: ScFunc,
	pub params: MutableMapClearParams,
}

pub struct MapSetCall {
	pub func: ScFunc,
	pub params: MutableMapSetParams,
}

pub struct ParamTypesCall {
	pub func: ScFunc,
	pub params: MutableParamTypesParams,
}

pub struct RandomCall {
	pub func: ScFunc,
}

pub struct TriggerEventCall {
	pub func: ScFunc,
	pub params: MutableTriggerEventParams,
}

pub struct ArrayLengthCall {
	pub func: ScView,
	pub params: MutableArrayLengthParams,
	pub results: ImmutableArrayLengthResults,
}

pub struct ArrayValueCall {
	pub func: ScView,
	pub params: MutableArrayValueParams,
	pub results: ImmutableArrayValueResults,
}

pub struct BlockRecordCall {
	pub func: ScView,
	pub params: MutableBlockRecordParams,
	pub results: ImmutableBlockRecordResults,
}

pub struct BlockRecordsCall {
	pub func: ScView,
	pub params: MutableBlockRecordsParams,
	pub results: ImmutableBlockRecordsResults,
}

pub struct GetRandomCall {
	pub func: ScView,
	pub results: ImmutableGetRandomResults,
}

pub struct IotaBalanceCall {
	pub func: ScView,
	pub results: ImmutableIotaBalanceResults,
}

pub struct MapValueCall {
	pub func: ScView,
	pub params: MutableMapValueParams,
	pub results: ImmutableMapValueResults,
}

pub struct ScFuncs {
}

impl ScFuncs {
    pub fn array_append(_ctx: & dyn ScFuncCallContext) -> ArrayAppendCall {
        let mut f = ArrayAppendCall {
            func: ScFunc::new(HSC_NAME, HFUNC_ARRAY_APPEND),
            params: MutableArrayAppendParams { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());
        f
    }

    pub fn array_clear(_ctx: & dyn ScFuncCallContext) -> ArrayClearCall {
        let mut f = ArrayClearCall {
            func: ScFunc::new(HSC_NAME, HFUNC_ARRAY_CLEAR),
            params: MutableArrayClearParams { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());
        f
    }

    pub fn array_set(_ctx: & dyn ScFuncCallContext) -> ArraySetCall {
        let mut f = ArraySetCall {
            func: ScFunc::new(HSC_NAME, HFUNC_ARRAY_SET),
            params: MutableArraySetParams { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());
        f
    }

    pub fn map_clear(_ctx: & dyn ScFuncCallContext) -> MapClearCall {
        let mut f = MapClearCall {
            func: ScFunc::new(HSC_NAME, HFUNC_MAP_CLEAR),
            params: MutableMapClearParams { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());
        f
    }

    pub fn map_set(_ctx: & dyn ScFuncCallContext) -> MapSetCall {
        let mut f = MapSetCall {
            func: ScFunc::new(HSC_NAME, HFUNC_MAP_SET),
            params: MutableMapSetParams { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());
        f
    }

    pub fn param_types(_ctx: & dyn ScFuncCallContext) -> ParamTypesCall {
        let mut f = ParamTypesCall {
            func: ScFunc::new(HSC_NAME, HFUNC_PARAM_TYPES),
            params: MutableParamTypesParams { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());
        f
    }

    pub fn random(_ctx: & dyn ScFuncCallContext) -> RandomCall {
        RandomCall {
            func: ScFunc::new(HSC_NAME, HFUNC_RANDOM),
        }
    }

    pub fn trigger_event(_ctx: & dyn ScFuncCallContext) -> TriggerEventCall {
        let mut f = TriggerEventCall {
            func: ScFunc::new(HSC_NAME, HFUNC_TRIGGER_EVENT),
            params: MutableTriggerEventParams { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, ptr::null_mut());
        f
    }

    pub fn array_length(_ctx: & dyn ScViewCallContext) -> ArrayLengthCall {
        let mut f = ArrayLengthCall {
            func: ScView::new(HSC_NAME, HVIEW_ARRAY_LENGTH),
            params: MutableArrayLengthParams { id: 0 },
            results: ImmutableArrayLengthResults { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, &mut f.results.id);
        f
    }

    pub fn array_value(_ctx: & dyn ScViewCallContext) -> ArrayValueCall {
        let mut f = ArrayValueCall {
            func: ScView::new(HSC_NAME, HVIEW_ARRAY_VALUE),
            params: MutableArrayValueParams { id: 0 },
            results: ImmutableArrayValueResults { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, &mut f.results.id);
        f
    }

    pub fn block_record(_ctx: & dyn ScViewCallContext) -> BlockRecordCall {
        let mut f = BlockRecordCall {
            func: ScView::new(HSC_NAME, HVIEW_BLOCK_RECORD),
            params: MutableBlockRecordParams { id: 0 },
            results: ImmutableBlockRecordResults { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, &mut f.results.id);
        f
    }

    pub fn block_records(_ctx: & dyn ScViewCallContext) -> BlockRecordsCall {
        let mut f = BlockRecordsCall {
            func: ScView::new(HSC_NAME, HVIEW_BLOCK_RECORDS),
            params: MutableBlockRecordsParams { id: 0 },
            results: ImmutableBlockRecordsResults { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, &mut f.results.id);
        f
    }

    pub fn get_random(_ctx: & dyn ScViewCallContext) -> GetRandomCall {
        let mut f = GetRandomCall {
            func: ScView::new(HSC_NAME, HVIEW_GET_RANDOM),
            results: ImmutableGetRandomResults { id: 0 },
        };
        f.func.set_ptrs(ptr::null_mut(), &mut f.results.id);
        f
    }

    pub fn iota_balance(_ctx: & dyn ScViewCallContext) -> IotaBalanceCall {
        let mut f = IotaBalanceCall {
            func: ScView::new(HSC_NAME, HVIEW_IOTA_BALANCE),
            results: ImmutableIotaBalanceResults { id: 0 },
        };
        f.func.set_ptrs(ptr::null_mut(), &mut f.results.id);
        f
    }

    pub fn map_value(_ctx: & dyn ScViewCallContext) -> MapValueCall {
        let mut f = MapValueCall {
            func: ScView::new(HSC_NAME, HVIEW_MAP_VALUE),
            params: MutableMapValueParams { id: 0 },
            results: ImmutableMapValueResults { id: 0 },
        };
        f.func.set_ptrs(&mut f.params.id, &mut f.results.id);
        f
    }
}

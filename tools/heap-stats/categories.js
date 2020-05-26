// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Categories for instance types.
export const CATEGORIES = new Map([
  [
    'user', new Set([
      'CONS_ONE_BYTE_STRING_TYPE',
      'CONS_STRING_TYPE',
      'DESCRIPTOR_ARRAY_TYPE',
      'ELEMENTS_TYPE',
      'EXTERNAL_INTERNALIZED_STRING_TYPE',
      'EXTERNAL_ONE_BYTE_INTERNALIZED_STRING_TYPE',
      'EXTERNAL_ONE_BYTE_STRING_TYPE',
      'EXTERNAL_STRING_TYPE',
      'EXTERNAL_STRING_WITH_ONE_BYTE_DATA_TYPE',
      'FIXED_BIGINT64_ARRAY_TYPE',
      'FIXED_BIGUINT64_ARRAY_TYPE',
      'FIXED_DOUBLE_ARRAY_TYPE',
      'FIXED_FLOAT32_ARRAY_TYPE',
      'FIXED_FLOAT64_ARRAY_TYPE',
      'FIXED_INT16_ARRAY_TYPE',
      'FIXED_INT32_ARRAY_TYPE',
      'FIXED_INT8_ARRAY_TYPE',
      'FIXED_UINT16_ARRAY_TYPE',
      'FIXED_UINT32_ARRAY_TYPE',
      'FIXED_UINT8_ARRAY_TYPE',
      'FIXED_UINT8_CLAMPED_ARRAY_TYPE',
      'FUNCTION_CONTEXT_TYPE',
      'GLOBAL_ELEMENTS_TYPE',
      'GLOBAL_PROPERTIES_TYPE',
      'HEAP_NUMBER_TYPE',
      'INTERNALIZED_STRING_TYPE',
      'JS_ARGUMENTS_OBJECT_TYPE',
      'JS_ARRAY_BUFFER_TYPE',
      'JS_ARRAY_ITERATOR_TYPE',
      'JS_ARRAY_TYPE',
      'JS_BOUND_FUNCTION_TYPE',
      'JS_DATE_TYPE',
      'JS_ERROR_TYPE',
      'JS_FAST_ARRAY_KEY_ITERATOR_TYPE',
      'JS_FAST_ARRAY_VALUE_ITERATOR_TYPE',
      'JS_FAST_HOLEY_ARRAY_VALUE_ITERATOR_TYPE',
      'JS_FAST_HOLEY_SMI_ARRAY_VALUE_ITERATOR_TYPE',
      'JS_FAST_SMI_ARRAY_KEY_VALUE_ITERATOR_TYPE',
      'JS_FAST_SMI_ARRAY_VALUE_ITERATOR_TYPE',
      'JS_FUNCTION_TYPE',
      'JS_GENERATOR_OBJECT_TYPE',
      'JS_GENERIC_ARRAY_VALUE_ITERATOR_TYPE',
      'JS_GLOBAL_OBJECT_TYPE',
      'JS_GLOBAL_PROXY_TYPE',
      'JS_COLLATOR_TYPE',
      'JS_DATE_TIME_FORMAT_TYPE',
      'JS_DISPLAY_NAMES_TYPE',
      'JS_LIST_FORMAT_TYPE',
      'JS_LOCALE_TYPE',
      'JS_NUMBER_FORMAT_TYPE',
      'JS_PLURAL_RULES_TYPE',
      'JS_RELATIVE_TIME_FORMAT_TYPE',
      'JS_SEGMENT_ITERATOR_TYPE',
      'JS_SEGMENTER_TYPE',
      'JS_V8_BREAK_ITERATOR_TYPE',
      'JS_MAP_KEY_ITERATOR_TYPE',
      'JS_MAP_KEY_VALUE_ITERATOR_TYPE',
      'JS_MAP_TYPE',
      'JS_MAP_VALUE_ITERATOR_TYPE',
      'JS_MESSAGE_OBJECT_TYPE',
      'JS_OBJECT_TYPE',
      'JS_PRIMITIVE_WRAPPER_TYPE',
      'JS_PROMISE_TYPE',
      'JS_PROXY_TYPE',
      'JS_REG_EXP_TYPE',
      'JS_SET_KEY_VALUE_ITERATOR_TYPE',
      'JS_SET_TYPE',
      'JS_SET_VALUE_ITERATOR_TYPE',
      'JS_STRING_ITERATOR_TYPE',
      'JS_TO_WASM_FUNCTION',
      'JS_TYPED_ARRAY_TYPE',
      'JS_WEAK_MAP_TYPE',
      'HEAP_NUMBER_TYPE',
      'NATIVE_CONTEXT_TYPE',
      'OBJECT_PROPERTY_DICTIONARY_TYPE',
      'ONE_BYTE_INTERNALIZED_STRING_TYPE',
      'ONE_BYTE_STRING_TYPE',
      'OTHER_CONTEXT_TYPE',
      'PROPERTY_ARRAY_TYPE',
      'SLICED_ONE_BYTE_STRING_TYPE',
      'SLICED_STRING_TYPE',
      'STRING_EXTERNAL_RESOURCE_ONE_BYTE_TYPE',
      'STRING_EXTERNAL_RESOURCE_TWO_BYTE_TYPE',
      'STRING_TYPE',
      'SYMBOL_TYPE',
      'THIN_ONE_BYTE_STRING_TYPE',
      'THIN_STRING_TYPE',
      'UNCACHED_EXTERNAL_INTERNALIZED_STRING_TYPE',
      'UNCACHED_EXTERNAL_ONE_BYTE_INTERNALIZED_STRING_TYPE',
      'UNCACHED_EXTERNAL_ONE_BYTE_STRING_TYPE',
      'UNCACHED_EXTERNAL_STRING_TYPE',
      'WASM_INSTANCE_OBJECT_TYPE',
      'WASM_MEMORY_OBJECT_TYPE',
      'WASM_MODULE_OBJECT_TYPE',
    ])
  ],
  [
    'system', new Set([
      'ACCESS_CHECK_INFO_TYPE',
      'ACCESSOR_INFO_TYPE',
      'ACCESSOR_PAIR_TYPE',
      'ALLOCATION_MEMENTO_TYPE',
      'ALLOCATION_SITE_TYPE',
      'ARRAY_BOILERPLATE_DESCRIPTION_TYPE',
      'ARRAY_BOILERPLATE_DESCRIPTION_ELEMENTS_TYPE',
      'BOILERPLATE_ELEMENTS_TYPE',
      'BOILERPLATE_PROPERTY_ARRAY_TYPE',
      'BOILERPLATE_PROPERTY_DICTIONARY_TYPE',
      'BYTE_ARRAY_TYPE',
      'CALL_HANDLER_INFO_TYPE',
      'CELL_TYPE',
      'CODE_STUBS_TABLE_TYPE',
      'CONTEXT_EXTENSION_TYPE',
      'ENUM_CACHE_TYPE',
      'ENUM_INDICES_CACHE_TYPE',
      'FOREIGN_TYPE',
      'FUNCTION_TEMPLATE_INFO_ENTRIES_TYPE',
      'FUNCTION_TEMPLATE_INFO_TYPE',
      'INTERCEPTOR_INFO_TYPE',
      'JS_API_OBJECT_TYPE',
      'JS_ARRAY_BOILERPLATE_TYPE',
      'JS_OBJECT_BOILERPLATE_TYPE',
      'JS_SPECIAL_API_OBJECT_TYPE',
      'MAP_TYPE',
      'NUMBER_STRING_CACHE_TYPE',
      'OBJECT_BOILERPLATE_DESCRIPTION_TYPE',
      'OBJECT_TEMPLATE_INFO_TYPE',
      'OBJECT_TO_CODE_TYPE',
      'ODDBALL_TYPE',
      'PROMISE_REACTION_JOB_INFO_TYPE',
      'PROMISE_RESOLVE_THENABLE_JOB_INFO_TYPE',
      'PROPERTY_CELL_TYPE',
      'PROTOTYPE_INFO_TYPE',
      'PROTOTYPE_USERS_TYPE',
      'REGEXP_MULTIPLE_CACHE_TYPE',
      'RETAINED_MAPS_TYPE',
      'SCOPE_INFO_TYPE',
      'SCRIPT_LIST_TYPE',
      'SCRIPT_SHARED_FUNCTION_INFOS_TYPE',
      'SERIALIZED_OBJECTS_TYPE',
      'SINGLE_CHARACTER_STRING_CACHE_TYPE',
      'STACK_FRAME_INFO_TYPE',
      'STRING_SPLIT_CACHE_TYPE',
      'STRING_TABLE_TYPE',
      'TRANSITION_ARRAY_TYPE',
      'WEAK_NEW_SPACE_OBJECT_TO_CODE_TYPE',
    ])
  ],
  [
    'code', new Set([
      'BUILTIN',
      'BYTECODE_ARRAY_CONSTANT_POOL_TYPE',
      'BYTECODE_ARRAY_HANDLER_TABLE_TYPE',
      'BYTECODE_ARRAY_TYPE',
      'BYTECODE_HANDLER',
      'CODE_DATA_CONTAINER_TYPE',
      'DEOPTIMIZATION_DATA_TYPE',
      'EMBEDDED_OBJECT_TYPE',
      'FEEDBACK_CELL_TYPE',
      'FEEDBACK_METADATA_TYPE',
      'FEEDBACK_VECTOR_ENTRY_TYPE',
      'FEEDBACK_VECTOR_HEADER_TYPE',
      'FEEDBACK_VECTOR_SLOT_CALL_TYPE',
      'FEEDBACK_VECTOR_SLOT_CALL_UNUSED_TYPE',
      'FEEDBACK_VECTOR_SLOT_ENUM_TYPE',
      'FEEDBACK_VECTOR_SLOT_LOAD_TYPE',
      'FEEDBACK_VECTOR_SLOT_LOAD_UNUSED_TYPE',
      'FEEDBACK_VECTOR_SLOT_OTHER_TYPE',
      'FEEDBACK_VECTOR_SLOT_STORE_TYPE',
      'FEEDBACK_VECTOR_SLOT_STORE_UNUSED_TYPE',
      'FEEDBACK_VECTOR_TYPE',
      'LOAD_HANDLER_TYPE',
      'NOSCRIPT_SHARED_FUNCTION_INFOS_TYPE',
      'OPTIMIZED_CODE_LITERALS_TYPE',
      'OPTIMIZED_FUNCTION',
      'PREPARSE_DATA_TYPE',
      'REGEXP',
      'RELOC_INFO_TYPE',
      'SCRIPT_SOURCE_EXTERNAL_ONE_BYTE_TYPE',
      'SCRIPT_SOURCE_EXTERNAL_TWO_BYTE_TYPE',
      'SCRIPT_SOURCE_EXTERNAL_TYPE',
      'SCRIPT_SOURCE_NON_EXTERNAL_ONE_BYTE_TYPE',
      'SCRIPT_SOURCE_NON_EXTERNAL_TWO_BYTE_TYPE',
      'SCRIPT_TYPE',
      'SHARED_FUNCTION_INFO_TYPE',
      'SOURCE_POSITION_TABLE_TYPE',
      'STORE_HANDLER_TYPE',
      'STUB',
      'UNCOMPILED_DATA_WITHOUT_PREPARSE_DATA_TYPE',
      'UNCOMPILED_DATA_WITH_PREPARSE_DATA_TYPE',
      'UNCOMPILED_JS_FUNCTION_TYPE',
      'UNCOMPILED_SHARED_FUNCTION_INFO_TYPE'
    ])
  ],
  ['unclassified', new Set()],
]);

// Maps category to description text that is shown in html.
export const CATEGORY_NAMES = new Map([
  ['user', 'JS'],
  ['system', 'Metadata'],
  ['code', 'Code'],
  ['unclassified', 'Unclassified'],
]);
const controls = {
    unit: document.getElementById('unit'),
    contentWidth: document.getElementById('contentWidth'),
    contentHeight: document.getElementById('contentHeight'),
    padding: document.getElementById('padding'),
    margin: document.getElementById('margin'),
    borderWidth: document.getElementById('borderWidth'),
    borderStyle: document.getElementById('borderStyle'),
    borderColor: document.getElementById('borderColor'),
    contentBg: document.getElementById('contentBg'),
    textColor: document.getElementById('textColor')
};

const toggles = {
    width: document.getElementById('toggleWidth'),
    height: document.getElementById('toggleHeight'),
    padding: document.getElementById('togglePadding'),
    margin: document.getElementById('toggleMargin'),
    borderWidth: document.getElementById('toggleBorderWidth'),
    borderStyle: document.getElementById('toggleBorderStyle'),
    borderColor: document.getElementById('toggleBorderColor'),
    backgroundColor: document.getElementById('toggleBackgroundColor'),
    color: document.getElementById('toggleColor')
};

const boxPreview = document.getElementById('boxPreview');
const boxContent = boxPreview.querySelector('.box-content');
const cssOutput = document.getElementById('cssOutput');

const defaultsByUnit = {
    px: {
        contentWidth: 220,
        contentHeight: 120,
        padding: 24,
        margin: 28,
        borderWidth: 6
    },
    rem: {
        contentWidth: 12,
        contentHeight: 7,
        padding: 1.2,
        margin: 1.5,
        borderWidth: 0.35
    },
    em: {
        contentWidth: 12,
        contentHeight: 7,
        padding: 1.2,
        margin: 1.5,
        borderWidth: 0.35
    },
    '%': {
        contentWidth: 60,
        contentHeight: 35,
        padding: 6,
        margin: 6,
        borderWidth: 2
    }
};

function withUnit(value, unit) {
    return `${value}${unit}`;
}

function applyDefaultsForUnit(unit) {
    const preset = defaultsByUnit[unit] || defaultsByUnit.px;

    controls.contentWidth.value = preset.contentWidth;
    controls.contentHeight.value = preset.contentHeight;
    controls.padding.value = preset.padding;
    controls.margin.value = preset.margin;
    controls.borderWidth.value = preset.borderWidth;
}

function updateBoxModel() {
    const unit = controls.unit.value;

    const width = withUnit(controls.contentWidth.value, unit);
    const height = withUnit(controls.contentHeight.value, unit);
    const padding = withUnit(controls.padding.value, unit);
    const margin = withUnit(controls.margin.value, unit);
    const borderWidth = withUnit(controls.borderWidth.value, unit);
    const borderStyle = controls.borderStyle.value;
    const borderColor = controls.borderColor.value;
    const contentBg = controls.contentBg.value;
    const textColor = controls.textColor.value;

    boxPreview.style.margin = toggles.margin.checked ? margin : '';
    boxPreview.style.borderWidth = toggles.borderWidth.checked ? borderWidth : '';
    boxPreview.style.borderStyle = toggles.borderStyle.checked ? borderStyle : '';
    boxPreview.style.borderColor = toggles.borderColor.checked ? borderColor : '';

    boxContent.style.width = toggles.width.checked ? width : '';
    boxContent.style.height = toggles.height.checked ? height : '';
    boxContent.style.padding = toggles.padding.checked ? padding : '';
    boxContent.style.backgroundColor = toggles.backgroundColor.checked ? contentBg : '';
    boxContent.style.color = toggles.color.checked ? textColor : '';

    const previewLines = [];
    const contentLines = [];

    if (toggles.margin.checked) {
        previewLines.push(`  margin: ${margin};`);
    }
    if (toggles.borderWidth.checked) {
        previewLines.push(`  border-width: ${borderWidth};`);
    }
    if (toggles.borderStyle.checked) {
        previewLines.push(`  border-style: ${borderStyle};`);
    }
    if (toggles.borderColor.checked) {
        previewLines.push(`  border-color: ${borderColor};`);
    }

    if (toggles.width.checked) {
        contentLines.push(`  width: ${width};`);
    }
    if (toggles.height.checked) {
        contentLines.push(`  height: ${height};`);
    }
    if (toggles.padding.checked) {
        contentLines.push(`  padding: ${padding};`);
    }
    if (toggles.backgroundColor.checked) {
        contentLines.push(`  background-color: ${contentBg};`);
    }
    if (toggles.color.checked) {
        contentLines.push(`  color: ${textColor};`);
    }

    cssOutput.textContent = `.box-preview {\n` +
        (previewLines.length ? `${previewLines.join('\n')}\n` : '  /* default styles */\n') +
        `}\n\n` +
        `.box-content {\n` +
        (contentLines.length ? `${contentLines.join('\n')}\n` : '  /* default styles */\n') +
        `}`;
}

Object.values(controls).forEach((control) => {
    control.addEventListener('input', updateBoxModel);
    control.addEventListener('change', updateBoxModel);
});

Object.values(toggles).forEach((toggle) => {
    toggle.addEventListener('change', updateBoxModel);
});

controls.unit.addEventListener('change', () => {
    applyDefaultsForUnit(controls.unit.value);
    updateBoxModel();
});

updateBoxModel();

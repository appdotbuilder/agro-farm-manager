<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\InventoryItem
 *
 * @property int $id
 * @property string $name
 * @property string $category
 * @property string $unit
 * @property float $current_stock
 * @property float $minimum_stock
 * @property float $unit_cost
 * @property string|null $supplier
 * @property \Illuminate\Support\Carbon|null $last_purchase_date
 * @property \Illuminate\Support\Carbon|null $expiry_date
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereCurrentStock($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereMinimumStock($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereUnitCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereSupplier($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereLastPurchaseDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereExpiryDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|InventoryItem lowStock()
 * @method static \Database\Factories\InventoryItemFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class InventoryItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'category',
        'unit',
        'current_stock',
        'minimum_stock',
        'unit_cost',
        'supplier',
        'last_purchase_date',
        'expiry_date',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'current_stock' => 'decimal:2',
        'minimum_stock' => 'decimal:2',
        'unit_cost' => 'decimal:2',
        'last_purchase_date' => 'date',
        'expiry_date' => 'date',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include items with low stock.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeLowStock($query)
    {
        return $query->whereColumn('current_stock', '<=', 'minimum_stock');
    }

    /**
     * Check if item is low in stock.
     */
    public function getIsLowStockAttribute(): bool
    {
        return $this->current_stock <= $this->minimum_stock;
    }

    /**
     * Check if item is expired.
     */
    public function getIsExpiredAttribute(): bool
    {
        return $this->expiry_date && $this->expiry_date->isPast();
    }
}